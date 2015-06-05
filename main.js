$("#fk-header-id").css("position", "relative");
$("#fk-mainhead-id").css("top", "50px");
$(".pbo-sticky").hide();
$(".shortListButton").hide();
" no-repeat center";
var mbar = '<div style="background:#027cd5;width:100%;height:50px;z-index:100000000;top:0;left:0;position:fixed;text-align:center"><input id="voiceSearch" placeholder="Hi! I am Flippy, Ask Me Anything" type="text" style="cursor:pointer;height: 50px;outline: 0;border: 0;width: 50%;font-size:32px;text-align:center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXVJREFUeNrsnctx2zAQhpHHITc5t9wkVyDnlhuZCuwOlFTgEuRUoBKUDnTOSXIFoiuQfMuNUgUKMSYnNM2HqAXAXeD/Znac8SQSgv0J7GIBUCkAAAAAhMg7j/9vo8zuMoszu8mtjk1mh8ySzPa56T8fIQCZjDN7yJ1/RfysOnFoe8bYwfOJn2d2cmTrzBaZTdH1w6OdsHPo/Krp757BDcOgOz4d0PlVIdzCJW6df2JoC7jGPhFT5xe2zeMSYCnST5kLACKwyFqA8wtbwl1hzPttdg+3mWMnUABpPm2BAJ/+wlZwH52tYAGcMArQI/+TcENASODeAwGkcOPlrDwQgDZWS8UfBAngW2afMvsiXMh/M/vDpTFS9wPoeGCiXjZ56Jp/nP8+FtD2TWbfIQB7jHJhTBpEgn73XADniOOqQSQQQOBENeIoDAIInGlpKomJUwr6XTgLYiqIYKQn6/yn3p17UP936z4N2B4vRgApAmh7aur29OvfPVpsz44QF+g2XkMA/ebehJh3mz74cSK2h806wEcBAqCmZ8VQfdfgjDqRPHcIkkLCqXMlCODG4mfHlZ9VRx1qREIV5AExdD9cnvYJrhgkJQPwSQAR0sD+QeBEDbt0622fS1+RikpzeHUJlyN6/v8MAbgbOaql4ivLQaWoFNB3AbQx1H6C35n9hAB4Y3M/wUNmv9DFcqFuTGWXAr4XMI9His8BS+8WgbhPAdWqW7UaeM7Src32iO9v7gLoU3RJSqKwVTLeErMICKBnMGZqyNyr16XiS0vG3lQBCzgXg0zm60VEHzfMy0mDSI6V1NGr+Z+7ACYOA7u448k9GHBgAgHwFEAXsaHP2XPsZO5pYKL8gaUApKwESj4KVp5qjhCAnWyB+1Ewtn3tey2Ay1EwlilgCALoonwUzOZ+ArYCAM0UdQi9J1Ff7UIpAs3RnbKh3k7G9p5ArusA8zyI2yt3p31srkkkEEA/4pYovryW7+o1L1QB7LkKgGsQmBKi9I0y/5oX78rA3Btm6wj1pfsJKILU3/EVAuiXmm0G+N5qvFGI5El5WAbmnpv7dBKIdQrIsRgUeyZo1odBOU4BuvBTvOhxouxd1ORS0I8QgBnKp30kHAVTeRufIAA3I8dEva4GDn0UjH0fh1IMqorDVclYZxXXEABvbO4nQAoonKny/AWS3NLAcb4OwOXVKt7fB8StGPRDvZygLWi6qMlVVE2dBjYQAK3Db1ocsVdvl26V4Zzb+xGAWxBIPXtX7ngTt4d6WwXk2kAXFyn32U9AuRKW3X1AEuBQvNFPvX5B1dzA5wCBAgjqHYHvoTlr7NEFYY8AuBI2cAFEEjqcWxZATbuahuJEvd2aXaz/3wTStyJYKnPv6NXr8Ofc7a+Xne/zlA/vCB6YmTKzB29E+P7UUCoJLmBE6PStor/No2jDSuEs4GCsLnS+6cskKdPRFG68nMiS86OKjS2JYAcXmskGzu3sUUeAt2yZ13dnxAx9RyQM/w5HgbZcu8/bPdOWhZtRj8AwVXzuNRZPlwOXLQ7bGg7eZnj6h8kI2hw5NhhElm3W8Lld6wQ7PP12RFA3/K4a/j71Pv9iGK8TV1d5OIK77DCtefqanlITizhN08tYCbwCxtfpYEyYp8+10ZnTwBLuccdcNa+zL5X9cm41vljAJcOMBpS1A0pGMC/FCTO4ghcnRwJYKz4HV4CFALBNAN6leT7tCXRxF98RzxlfXASBgDG3Cjt6gsfUti6s6Qc8CqCiJ5yFCmA7N2jn0nJwcCt7vh4NOzj+dxAAgAAABAAgAAABAAgAQAAAAgAQAIAAAAQAIAAAAQAIAEAAAAIAEACAAAAEACAAAAEACAAAAAAAADjknwADAIAdEd37mBrKAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-position: right; padding:0px 10px;background-size: 24px;"></div>';
$("body").prepend(mbar);

$(window).scroll(function() {
    if ($(this).scrollTop()>0){
        $('#fk-mainhead-id').fadeOut();
    }
    else{
      $('#fk-mainhead-id').fadeIn();
    }
});

$("#voiceSearch")

$("#voiceSearch").click(function(){
    getUserSpeechInput(domAction, function(data){
        $("#voiceSearch").val(data);
    });
    $("#voiceSearch").blur();
});

(function(){
    $("#voiceSearch").val(localStorage.getItem('vQuery'));
    localStorage.setItem('vQuery', '');
})();
