function parseString(query)
{
	query_arr = query.split(" ");

	if(query_arr[0] == "search")
	{
		// search code
		search_string = query.replace("search ","");
		console.log(search_string);
		return query;
	}
	else if(query_arr[0] == "include")
	{
		// include code	
		search_string = query.replace("include ","");
		console.log(search_string);
		return query;
	}
	else if(query_arr[0] == "exclude")
	{
		// exclude code
		search_string = query.replace("exclude ","");
		console.log(search_string);
		return query;
	}
}