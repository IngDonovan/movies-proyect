const locHash = location.hash;

window.addEventListener('DOMContentLoaded', navigator, false);//cuando cambie nuestro contenido
window.addEventListener('hashchange', navigator, false)

function navigator() {
    console.log({ location });

    if (locHash.startsWith('#trends')) {
        trendsPage();
    }else if (locHash.startsWith('#search=')) {
        searchPage();
    } else if (locHash.startsWith('#movie=')) {
        moviePage();
    } else if (locHash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }

}

function homePage() {
    console.log('Home!!');
    getTrendingMoviesPreview();
    getCategoriesPreview(); 
}
function categoriesPage() {
    console.log('in CATEGORY!!!');
}
function moviePage() {
    console.log('in MOVIE!!!');
}
function searchPage() {
    console.log('in SEARCH!!!');
}
function trendsPage() {
    console.log('in TRENDS!!!');
}