$("#fk-header-id").css("position", "relative");
$("#fk-mainhead-id").css("top", "50px");
$(".pbo-sticky").hide();
$(".shortListButton").hide();

var mbar = '<div style="background:#000;width:100%;height:50px;z-index:100000000;top:0;left:0;position:fixed;"><input type="text"><button id="voiceButton">voice</button></div>';
$("body").prepend(mbar);

$(window).scroll(function() {
    if ($(this).scrollTop()>0){
        $('#fk-mainhead-id').fadeOut();
    }
    else{
      $('#fk-mainhead-id').fadeIn();
    }
});

$("#voiceButton").click(function(){
    getUserSpeechInput();
});
