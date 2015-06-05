var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
	console.log(event);
	// Add processing code here
}
