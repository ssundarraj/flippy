function getFilters(kwd){
    var arr = [];
    var elems = document.getElementsByClassName('facet');
    console.log(elems[40].title);
    var options = {
      keys: ['title']
    }
    var f = new Fuse(elems, options);
    var result = f.search(kwd);
    console.log(result);
    return result[0];
}
