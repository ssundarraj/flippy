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
		case "view":
			viewProduct(data);
		case "addcart":
			addToCart();
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
	function viewProduct(data){
		var div = getResults(data);
		console.log(div);
		div.getElementsByTagName('a')[0].click(); 
	}
	function addToCart(){
		$(".btn-buy-now")[0].click();			
	}
}

//domAction('include','Women');
//domAction('searchFK',"watch");
