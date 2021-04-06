#!/bin/bash

echo "Executing set-version script"
VERSION=$(cat "VERSION")

CURRENT_ENV_FILE="frontend/src/environments/environment.prod.ts"

# UPDATE VERSION
sed -i -e 's/%VERSION%/'${VERSION}'/g' ${CURRENT_ENV_FILE}
