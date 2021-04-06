#! /usr/bin/env bash

set -e

SCRIPT_DIR=$(realpath $(dirname "$0"))
PROJECT_NAME=`basename ${SCRIPT_DIR%/*}`
PROGNAME=$(basename $0)

error_exit()
{ #	Function for exit due to fatal program error
  #	Accepts 1 argument: string containing descriptive error message
	echo "${PROGNAME}: ERROR: ${1:-"Unknown Error"}" 1>&2
	exit 1
}

usage()
{
  echo ""
  echo "Usage of $0:"
  echo "-------------------------------------"
  echo "Initialize docker-compose-based local development"
  echo "-------------------------------------"


  echo "Usage:"
  echo "  e.g: $0 [--setup-only]"
}

for arg in "$@"
do
  case $arg in
    --setup-only)
      setuponly="true"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      OTHER_ARGUMENTS+=("$1")
      shift # Remove generic argument from processing
      ;;
  esac
done

echo Initializing $PROJECT_NAME


# TODO run ionic build in container?

cd $SCRIPT_DIR/../frontend
npm ci
ionic info --no-interactive --confirm
# build dev environment
ionic build
cd -

if [ "${setuponly}" != "true" ]; then
  echo Create nap-net network
  docker network create nap-net || true

  cd "$SCRIPT_DIR/.."
  docker-compose -f docker-compose.dev.yml up --build
fi