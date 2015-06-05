var d = document.createElement("script");
var e = document.createElement("div");
e.id = "result";
d.type = "text/javascript";
d.src = "https://rawgit.com/ssundarraj/fk-concierge/master/main.js";
document.getElementsByTagName("body")[0].appendChild(d);
document.getElementsByTagName("body")[0].appendChild(e);



var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
    console.log(event);
    var a = "";
    for(var i=0; i<event.results.length; i++){
        a = a + event.results[i][0].transcript
    }
    document.getElementById('result').innerHTML = parseString(a);
    // Add processing code here
}
