#!/bin/sh

mkdir -p crx/js
cat ./vendor/jquery.min.js ./vendor/fuse.min.js parser.js dom.js speech.js main.js > bundle.js
cp bundle.js crx/js/script.js
./google-chrome --pack-extension=./crx
mkdir -p packed_extension
mv crx.crx packed_extension/flippy.crx
mv crx.pem packed_extension/flippy.pem
