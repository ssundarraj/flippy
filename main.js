$("#fk-header-id").css("position", "relative");
$("#fk-mainhead-id").css("top", "50px");
$(".pbo-sticky").hide();
$(".shortListButton").hide();

var mbar = '<div style="background:#027cd5;width:100%;height:50px;z-index:100000000;top:0;left:0;position:fixed;text-align:center"><input id="voiceSearch" type="text" style="height: 50px;outline: 0;border: 0;width: 50%;font-size:32px;text-align:center;"></div>';
$("body").prepend(mbar);

$(window).scroll(function() {
    if ($(this).scrollTop()>0){
        $('#fk-mainhead-id').fadeOut();
    }
    else{
      $('#fk-mainhead-id').fadeIn();
    }
});

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
