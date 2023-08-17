#!/bin/bash

rm -rf dist/js/*
tsc -p tsconfig.json
rm -rf /var/www/html/*
rsync -r dist/ /var/www/html