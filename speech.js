function getUserSpeechInput(callback, voiceBar){
    console.log('in');
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event){
        var voiceQueryString = event.results[0][0].transcript;
        console.log(voiceQueryString); //Full voice query
        voiceBar(voiceQueryString);
        localStorage.setItem('vQuery', voiceQueryString);
        var action = parseString(voiceQueryString);
        getSearchKeywords(voiceQueryString.replace(action, ""), function(m){
            // console.log(m);
            // console.log(action);
            callback(action, m);
            okayFlipkart();
        });
    }
    recognition.start()
}


function okayFlipkart()
{
    var fkrecognition = new webkitSpeechRecognition();
    console.log("outsideresult"+fkrecognition);
    fkrecognition.onresult = function(event){
        var voiceQueryString = event.results[0][0].transcript;
        console.log(voiceQueryString); //Full voice query
        // console.log("insideonresult"+this); // getting this = fkrecognition
        
        if(voiceQueryString == "ok flipkart")
        {
            this.stop();
            $("#voiceSearch").trigger("click");
        }
        else
        {
            okayFlipkart();
        }
    }
    fkrecognition.start()   
}

function parseString(query){
    query_arr = query.split(" ");

    search_string = "search";
    if(query_arr[0] == "search")
    {
        // search code
        search_string = "search";
        // console.log(search_string);
        return search_string;
    }
    else if(query_arr[0] == "include")
    {
        // include code 
        search_string = "include";
        // console.log(search_string);
        return search_string;
    }
    else if(query_arr[0] == "exclude")
    {
        // exclude code
        search_string = "exclude";
        // console.log(search_string);
        return search_string;
    }
  return search_string;
}


function getSearchKeywords(query,callback){
    $.ajax({
        type: "POST",
        url: "http://access.alchemyapi.com/calls/text/TextGetRankedKeywords",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            'apikey': 'e6d05038ff5fe3c7ac9f6dae272b102fecd9c493',
            'text': query,
            'outputMode': 'json',
        },
        beforeSend: function(xhr) {
            // console.log("Extracting keywords")
        }
    }).done(function(data) {
        console.log(data);
        if(data.status == "OK" && data.keywords != undefined && data.keywords[0].text != undefined){
            callback(data.keywords[0].text);
        }
        else{
            callback("ERROR");
        }
    });    
}
