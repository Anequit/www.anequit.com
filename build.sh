#!/bin/bash

rm -rf dist/js/
tsc -p tsconfig.json
rsync -r dist/ /var/www/html