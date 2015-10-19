jQuery("#fk-header-id").css("position", "relative");
jQuery("#fk-mainhead-id").css("top", "50px");
jQuery(".pbo-sticky").hide();
jQuery(".shortListButton").hide();
var mbar = '<div style="background:#027cd5;width:100%;height:50px;z-index:100000000;top:0;left:0;position:fixed;text-align:center"><input id="voiceSearch" placeholder="Hi! I am Flippy, Ask Me Anything" type="text" style="cursor:pointer;height: 50px;outline: 0;border: 0;width: 50%;font-size:32px;text-align:center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXVJREFUeNrsnctx2zAQhpHHITc5t9wkVyDnlhuZCuwOlFTgEuRUoBKUDnTOSXIFoiuQfMuNUgUKMSYnNM2HqAXAXeD/Znac8SQSgv0J7GIBUCkAAAAAhMg7j/9vo8zuMoszu8mtjk1mh8ySzPa56T8fIQCZjDN7yJ1/RfysOnFoe8bYwfOJn2d2cmTrzBaZTdH1w6OdsHPo/Krp757BDcOgOz4d0PlVIdzCJW6df2JoC7jGPhFT5xe2zeMSYCnST5kLACKwyFqA8wtbwl1hzPttdg+3mWMnUABpPm2BAJ/+wlZwH52tYAGcMArQI/+TcENASODeAwGkcOPlrDwQgDZWS8UfBAngW2afMvsiXMh/M/vDpTFS9wPoeGCiXjZ56Jp/nP8+FtD2TWbfIQB7jHJhTBpEgn73XADniOOqQSQQQOBENeIoDAIInGlpKomJUwr6XTgLYiqIYKQn6/yn3p17UP936z4N2B4vRgApAmh7aur29OvfPVpsz44QF+g2XkMA/ebehJh3mz74cSK2h806wEcBAqCmZ8VQfdfgjDqRPHcIkkLCqXMlCODG4mfHlZ9VRx1qREIV5AExdD9cnvYJrhgkJQPwSQAR0sD+QeBEDbt0622fS1+RikpzeHUJlyN6/v8MAbgbOaql4ivLQaWoFNB3AbQx1H6C35n9hAB4Y3M/wUNmv9DFcqFuTGWXAr4XMI9His8BS+8WgbhPAdWqW7UaeM7Src32iO9v7gLoU3RJSqKwVTLeErMICKBnMGZqyNyr16XiS0vG3lQBCzgXg0zm60VEHzfMy0mDSI6V1NGr+Z+7ACYOA7u448k9GHBgAgHwFEAXsaHP2XPsZO5pYKL8gaUApKwESj4KVp5qjhCAnWyB+1Ewtn3tey2Ay1EwlilgCALoonwUzOZ+ArYCAM0UdQi9J1Ff7UIpAs3RnbKh3k7G9p5ArusA8zyI2yt3p31srkkkEEA/4pYovryW7+o1L1QB7LkKgGsQmBKi9I0y/5oX78rA3Btm6wj1pfsJKILU3/EVAuiXmm0G+N5qvFGI5El5WAbmnpv7dBKIdQrIsRgUeyZo1odBOU4BuvBTvOhxouxd1ORS0I8QgBnKp30kHAVTeRufIAA3I8dEva4GDn0UjH0fh1IMqorDVclYZxXXEABvbO4nQAoonKny/AWS3NLAcb4OwOXVKt7fB8StGPRDvZygLWi6qMlVVE2dBjYQAK3Db1ocsVdvl26V4Zzb+xGAWxBIPXtX7ngTt4d6WwXk2kAXFyn32U9AuRKW3X1AEuBQvNFPvX5B1dzA5wCBAgjqHYHvoTlr7NEFYY8AuBI2cAFEEjqcWxZATbuahuJEvd2aXaz/3wTStyJYKnPv6NXr8Ofc7a+Xne/zlA/vCB6YmTKzB29E+P7UUCoJLmBE6PStor/No2jDSuEs4GCsLnS+6cskKdPRFG68nMiS86OKjS2JYAcXmskGzu3sUUeAt2yZ13dnxAx9RyQM/w5HgbZcu8/bPdOWhZtRj8AwVXzuNRZPlwOXLQ7bGg7eZnj6h8kI2hw5NhhElm3W8Lld6wQ7PP12RFA3/K4a/j71Pv9iGK8TV1d5OIK77DCtefqanlITizhN08tYCbwCxtfpYEyYp8+10ZnTwBLuccdcNa+zL5X9cm41vljAJcOMBpS1A0pGMC/FCTO4ghcnRwJYKz4HV4CFALBNAN6leT7tCXRxF98RzxlfXASBgDG3Cjt6gsfUti6s6Qc8CqCiJ5yFCmA7N2jn0nJwcCt7vh4NOzj+dxAAgAAABAAgAAABAAgAQAAAAgAQAIAAAAQAIAAAAQAIAEAAAAIAEACAAAAEACAAAAEACAAAAAAAADjknwADAIAdEd37mBrKAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-position: right; padding:0px 10px;background-size: 24px;"></div>';

var beepscript = '<script>function beep() {var snd = new  Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");snd.play();}</script>';

mbar = mbar + beepscript;

jQuery("body").prepend(mbar);

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop()>0) {
        jQuery('#fk-mainhead-id').fadeOut();
    }
    else {
      jQuery('#fk-mainhead-id').fadeIn();
    }
});

jQuery("#voiceSearch");

jQuery("#voiceSearch").click(function(){
    getUserSpeechInput(domAction, function(data){
        jQuery("#voiceSearch").val(data);
    });
    jQuery("#voiceSearch").blur();
});

(function(){
    jQuery("#voiceSearch").val(localStorage.getItem('vQuery'));
    localStorage.setItem('vQuery', '');
})();

jQuery(document).ready(function(){
  okayFlipkart();
});
