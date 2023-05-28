const locHash = location.hash;

arrowBtn.addEventListener('click', () => location.hash = 'home');
searchFormBtn.addEventListener('click', () => location.hash = 'search=');
trendingBtn.addEventListener('click', () => location.hash = 'trends');

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, true)

function navigator() {
    console.log({ location });

    locHash.startsWith('#trends')? trendsPage():
    locHash.startsWith('#search=')? searchPage():
    locHash.startsWith('#movie=')? movieDetailsPage():
    locHash.startsWith('#category=')? categoriesPage():
    homePage()

    // if (locHash.startsWith('#trends')) {
    //     trendsPage();
    // }else if (locHash.startsWith('#search=')) {
    //     searchPage();
    // } else if (locHash.startsWith('#movie=')) {
    //     moviePage();
    // } else if (locHash.startsWith('#category=')) {
    //     categoriesPage();
    // } else {
    //     homePage();
    // }

}

function homePage() {
    console.log('Home!!');

    headerSection.classList.remove('header-container--long');//el del css
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview(); 
}
function categoriesPage() {
    console.log('in CATEGORY!!!');

    headerSection.classList.remove('header-container--long');//el del css
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}
function movieDetailsPage() {
    console.log('in MOVIE!!!');

    headerSection.classList.add('header-container--long');//el del css
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
}
function searchPage() {
    console.log('in SEARCH!!!');

    headerSection.classList.remove('header-container--long');//el del css
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}
function trendsPage() {
    console.log('in TRENDS!!!');

    headerSection.classList.remove('header-container--long');//el del css
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}