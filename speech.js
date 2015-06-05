function getUserSpeechInput(callback, voiceBar){
    console.log('in');
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
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
        });
    }
    recognition.start();
}


function okayFlipkart()
{
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
        if(voiceQueryString.indexOf("ok flipkart") > -1)
         {
            $("#voiceSearch").css('background', 'green');
            fkrecognition.abort();
            $("#voiceSearch").trigger('click');
       
        }
        else
        {
            $("#voiceSearch").css('background', 'red');
            voiceQueryString = '';
        }
    }
    fkrecognition.onerror = function(){
        console.log("on error");
    };
    fkrecognition.onnomatch= function(){
        console.log("no match");
    };
    fkrecognition.start();
}

function parseString(query){
    query_arr = query.split(" ");

    search_string = "search";
    if(query_arr[0] == "search"){
        // search code
        search_string = "search";
        // console.log(search_string);
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
        search_string = "exclude";
        return search_string;
    }
    else if(query_arr[0] == "add" && query_arr[0] == "to" && query_arr[0] == "cart" || query_arr[0] == "add" && query_arr[0] == "cart"){
        // ^ "add to cart" or "add cart"
        search_string = "addcart";
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
        if(data.keywords.length !== 0){
            if(data.status == "OK" && data.keywords != undefined && data.keywords[0].text != undefined){
            callback(data.keywords[0].text);
        }
        else{
            $("#voiceSearch").css('background', 'orange');
            okayFlipkart();
        }
        }else{
            $("#voiceSearch").css('background', 'gold');
            okayFlipkart();
        }   
    });    
}
