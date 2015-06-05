==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.flipkart.com/
// @grant        none
// ==/UserScript==
var d = document.createElement("script");
var e = document.createElement("div");
e.id = "result";
d.type = "text/javascript";
d.src = "https://rawgit.com/ssundarraj/fk-concierge/master/main.js";
document.getElementsByTagName("body")[0].appendChild(d);
document.getElementsByTagName("body")[0].appendChild(e);

