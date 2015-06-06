#!/bin/sh

mkdir -p dist
cat ./vendor/jquery.min.js ./vendor/fuse.min.js parser.js dom.js speech.js main.js > bundle.js
cat > userscript.js.script <<- EOM

// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.flipkart.com/*
// @grant        none
// ==/UserScript==
var d1 = document.createElement("script");
d1.src = "http://localhost:8000/bundle.js";
document.getElementsByTagName("body")[0].appendChild(d1);
EOM

# mv bundle.js userscript.js.script dist
