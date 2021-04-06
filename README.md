# heisl-frontend

## Getting Started
To develop locally setup the [nap-backend](https://gitlab.com/nap-solution/nap-backend). The Frontend pulls its data from this API.  
You may use the `ionic serve` launch config in VSCode to have a auto recompiling version running while developing.

## Run Container

Use docker-compose.dev.yaml

```bash
docker-compose -f docker-compose.dev.yml up --build -d
```

## Access the local frontend

You can access the local frontend at [http://127.0.0.1:8100/](http://127.0.0.1:8100/)

As CORS is not allowed locally, you can launch a new instance of Chrome with CORS disabled

```bash
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

## Code linting

This project uses ESLint. 
* enable error highlighting by installing the "ESLint" VSCode extension
* run `ng lint` to get a list of errors in your terminal
* run `ng lint --fix` to fix some errors

## Openapi code generation

To generate the SwaggerModels & Services, run the following:

```bash
npm run generate:api <openapi_json_spec_url>
```

If pulling the spec from a local server (recommended), the URL to be used is `http://localhost:xxxx/swagger/v1/swagger.json`.  
The files will be created under `/frontend/openapi`.