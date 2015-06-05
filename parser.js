function parseString(query)
{
	query = query.split(" ");

	if(query[0] == "search")
	{
		// search code
		search_string = query.replace("search ","");
		console.log(search_string);
	}
	else if(query[0] == "include")
	{
		// include code	
		search_string = query.replace("include ","");
		console.log(search_string);
	}
	else if(query[0] == "exclude")
	{
		// exclude code
		search_string = query.replace("exclude ","");
		console.log(search_string);
	}
}