#!/bin/bash

rm -rf dist/js/*
rm -rf /var/www/html/*
tsc -p tsconfig.json
rsync -r dist/ /var/www/html