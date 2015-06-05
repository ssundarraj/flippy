// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.flipkart.com/
// @grant        none
// ==/UserScript==
var d = document.createElement("script");
//d.src = "https://rawgit.com/ssundarraj/fk-concierge/master/main.js";
d.src = "http://localhost:8000/main.js";
document.getElementsByTagName("body")[0].appendChild(d);
