#! /usr/bin/env bash

SCRIPT_DIR=$(realpath $(dirname "$0"))

cd $SCRIPT_DIR/../frontend
ionic build --prod
echo "> docker build -t bs-frontend"
docker build -t bs-frontend $SCRIPT_DIR/..