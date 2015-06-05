// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.flipkart.com/*
// @grant        none
// ==/UserScript==
//d.src = "https://rawgit.com/ssundarraj/fk-concierge/master/main.js";
var d1 = document.createElement("script");
d1.src = "http://localhost:8000/vendor/jquery.min.js";
document.getElementsByTagName("body")[0].appendChild(d1);

var d1 = document.createElement("script");
d1.src = "http://localhost:8000/vendor/fuse.min.js";
document.getElementsByTagName("body")[0].appendChild(d1);

var d2 = document.createElement("script");
d2.src = "http://localhost:8000/parser.js";
document.getElementsByTagName("body")[0].appendChild(d2);

var d3 = document.createElement("script");
d3.src = "http://localhost:8000/dom.js";
document.getElementsByTagName("body")[0].appendChild(d3);

var d4 = document.createElement("script");
d4.src = "http://localhost:8000/speech.js";
document.getElementsByTagName("body")[0].appendChild(d4);

var d = document.createElement("script");
d.src = "http://localhost:8000/main.js";
document.getElementsByTagName("body")[0].appendChild(d);