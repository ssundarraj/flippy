function getUserSpeechInput(callback, voiceBar){
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = function(event){
        var voiceQueryString = event.results[0][0].transcript;
        //console.log(voiceQueryString); //Full voice query
        voiceBar(voiceQueryString);
        localStorage.setItem('vQuery', voiceQueryString.replace("new","view"));
        var action = parseString(voiceQueryString);
        if(action === 'addcart'){
            callback(action);
        }
        else if(action === 'viewcart'){
            callback(action);
        }
        else if((action === 'include')||(action === 'exclude')){
            callback(action,voiceQueryString.replace(action, ""));
        }
        else {
            getSearchKeywords(voiceQueryString.replace(action, ""), function(m){
                // console.log(m);
                // console.log(action);
                callback(action, m);
            });    
        }
        
    }
    recognition.start();
}

function okayFlipkart(){
    var fkrecognition = new webkitSpeechRecognition();
    fkrecognition.continuous = true;
    fkrecognition.interimResults = true;
    console.log("outsideresult",fkrecognition);
    var voiceQueryString = '';

    fkrecognition.onresult = function(event){

        for(var i =0;i<event.results.length;i++){
           voiceQueryString += event.results[i][0].transcript;
        }
        console.log(voiceQueryString);
        // console.log("insideonresult"+this); // getting this = fkrecognition
        console.log(event.results);

        if(voiceQueryString.indexOf("ok flipkart") > -1) {
            jQuery("#voiceSearch").css('color', 'green');
            beep();
            fkrecognition.abort();
            jQuery("#voiceSearch").trigger('click');
        }
        else {
            jQuery("#voiceSearch").css('color', 'red');
            voiceQueryString = '';
        }
    }
    // Function to handle the error
    fkrecognition.onerror = function(){
        console.log("on error");
    };
    // Function to handle nomatch
    fkrecognition.onnomatch= function(){
        console.log("no match");
    };
    // Start Voice recognition
    fkrecognition.start();
}

function parseString(query){
    query_arr = query.split(" ");
    
    if(query_arr[0] == "new")
    {
        query_arr[0] = "view";
    }    
    search_string = "search";
    if(query_arr[0] == "search"){
        // search code
        search_string = "search";
        // console.log(search_string);
        return search_string;
    }
    else if(query === 'view cart'){   // ^ "view cart"
        search_string = "viewcart";
        return search_string;
    }
    else if(query_arr[0] == "include"){
        // include code 
        search_string = "include";
        // console.log(search_string);
        return search_string;
    }
    else if(query_arr[0] == "exclude"){
        // exclude code
        search_string = "exclude";
        // console.log(search_string);
        return search_string;
    }
    else if(query_arr[0] == "view"){
        search_string = "view";
        return search_string;
    }
    else if(query === 'add to cart'){   // ^ "add to cart" or "add cart"
        search_string = "addcart";
        return search_string;
    }
    return search_string;
}


function getSearchKeywords(query,callback){
    jQuery.ajax({
        type: "POST",
        url: "http://access.alchemyapi.com/calls/text/TextGetRankedKeywords",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            'apikey': '',
            'text': query,
            'outputMode': 'json',
        },
        beforeSend: function(xhr) {
            // console.log("Extracting keywords")
        }
    }).done(function(data) {
        console.log(data);
        if(data.keywords != undefined)
        {
            if(data.keywords.length !== 0){
                if(data.status == "OK" && data.keywords != undefined && data.keywords[0].text != undefined){
                callback(data.keywords[0].text);
                }
                else {
                        // jQuery("#voiceSearch").css('background', 'orange');
                    okayFlipkart();
                }
            }
            else {
                    // jQuery("#voiceSearch").css('background', 'gold');
                okayFlipkart();
            }   
        }
        else {
            okayFlipkart();
        }
    });    
}
