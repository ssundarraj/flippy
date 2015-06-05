var domAction = function(eventType, data, options){
	switch(eventType){
		case "search":
			searchFK(data);
			break;		
		case "filter":
			filter(data);
			break;
	}
}

function searchFK(data){
	var searchBarInputs = $(".search-bar input");	
	var searchBox = searchBarInputs[0],
	submitButton = searchBarInputs[3];
	searchBox.value = data;
	$(submitButton).trigger("click");
}

function filter(data){
	
}
//domAction('filter',{filterType:"brand",filterChoice:"Ajmal"});
//domAction('searchFK',"watch");
