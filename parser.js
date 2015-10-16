// Function to get the filters for the search
function getFilters(kwd){
    var elems = document.getElementsByClassName('facet');
    // console.log(elems[40].title);
    var options = {
      keys: ['title']
    }
    var f = new Fuse(elems, options);
    var result = f.search(kwd);
    // console.log(result);
    return result[0];
}

// Function to get the results for the search
function getResults(kwd){
    var elems = document.getElementsByClassName('pu-title');
    console.log(elems);
    var options = {
      keys: ['textContent']
    }
    var f = new Fuse(elems, options);
    var result = f.search(kwd);
    console.log(result)
    return result[0];
}
