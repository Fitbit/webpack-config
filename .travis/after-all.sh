#!/bin/bash
declare exitCode;
$(npm bin)/travis-after-all
exitCode=$?
if [ $exitCode -eq 0 ]; then
  npm run build;
  npm run codeclimate;
  npm run semantic-release;
  npm run jsdoc;
  npm run gh-pages;
fi
