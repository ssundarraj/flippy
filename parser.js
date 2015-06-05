function getFilters(kwd){
    var elems = document.getElementsByClassName('facet');
    console.log(elems[40].title);
    var options = {
      keys: ['title']
    }
    var f = new Fuse(elems, options);
    var result = f.search(kwd);
    // console.log(result);
    return result[0];
}


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
