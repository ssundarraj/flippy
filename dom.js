function domAction(eventType, data, options){
	switch(eventType){
		case "search":
			searchFK(data);
			break;		
		case "include":
			triggerFilter(data,true);
			break;
		case "exclude":
			triggerFilter(data,false);
	}

	function searchFK(data){
		var searchBarInputs = $(".search-bar input");	
		var searchBox = searchBarInputs[0],
		    submitButton = searchBarInputs[3];
		searchBox.value = data;
		$(submitButton).trigger("click");
	}

	function triggerFilter(data,triggerOption){
		var li = getFilters(data);
		if(!li.getElementsByTagName('input')[0].checked && triggerOption)
			li.getElementsByTagName('a')[0].click();
		if(li.getElementsByTagName('input')[0].checked && !triggerOption)
			li.getElementsByTagName('a')[0].click();
		}
}

//domAction('include','Women');
//domAction('searchFK',"watch");
