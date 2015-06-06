function domAction(eventType, data, options){
	switch(eventType){
		case "search":
			searchFK(data);
			break;
		case "include":
			alert(data);
			triggerFilter(data,true);
			break;
		case "exclude":
			triggerFilter(data,false);
			break;
		case "view":
			viewProduct(data);
			break;
		case "addcart":
			addToCart();
			break;
		case "viewcart":
			viewCart();
			break;
	}

	function searchFK(data){
		var searchBarInputs = jQuery(".search-bar input");	
		var searchBox = searchBarInputs[0],
		    submitButton = searchBarInputs[3];
		searchBox.value = data;
		if(!submitButton)
			return;
		jQuery(submitButton).trigger("click");
	}

	function triggerFilter(data,triggerOption){
		var li = getFilters(data);
		if(!li)
			return;
		if(!li.getElementsByTagName('input')[0].checked && triggerOption)
			li.getElementsByTagName('a')[0].click();
		if(li.getElementsByTagName('input')[0].checked && !triggerOption)
			li.getElementsByTagName('a')[0].click();
	}
	function viewProduct(data){
		var div = getResults(data);
		if(!div)
			return;
		console.log(div);
		div.getElementsByTagName('a')[0].click(); 
	}
	function addToCart(){
		jQuery(".btn-buy-now")[0].click();
		location.reload();			
	}
	function viewCart(){
		// jQuery('.btn-cart')[0].trigger("click");
		window.location.href = "https://www.flipkart.com/viewcart";
		// location.reload('');			
	}
}

//domAction('include','Women');
//domAction('searchFK',"watch");
