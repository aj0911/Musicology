function closeSearch(){
    document.querySelector('#Home .search .search-form').style.left = "-100%";
}

function openSearch(){
    document.querySelector('#Home .search .search-form').style.left = "0%";
}

function closeMenu(){
    document.querySelector('#Home .nav').style.left = "-100%";
}

function openMenu(){
    document.querySelector('#Home .nav').style.left = "0%";
    document.querySelector('html').scroll= null;
}