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
  echo "Tear down docker-compose-based local development"
  echo "-------------------------------------"


  echo "Usage:"
  echo "  e.g: $0"
}

echo Stopping $PROJECT_NAME

cd "$SCRIPT_DIR/.."
docker-compose -f docker-compose.dev.yml down

docker network rm heisl-net || true
