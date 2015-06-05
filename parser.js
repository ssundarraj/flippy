function getFilters(){
    var arr = [];

    $.each($('div.facet-title > h2'),function(id,val){
        // console.log($(val).html());
        if($.trim($(val).html()) != ""){
            arr.push($.trim($(val).html()));
        }
    });
    $.each($('li.facet'),function(id,val){
        console.log($(val).html());
        if($.trim($(val).attr("title")) != "")
            arr.push($.trim($(val).attr("title")));
    });
    // console.log(arr);
    return arr;
}
