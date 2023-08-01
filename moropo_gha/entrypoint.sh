#!/bin/sh -l

set -e

cd $GITHUB_WORKSPACE/moropo_gha/

npm install

node index.js

