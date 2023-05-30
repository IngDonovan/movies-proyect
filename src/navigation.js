
searchFormBtn.addEventListener('click', () => {
    location.hash = `search=${searchFormInput.value}`
    //console.log({'busqueda': anterior});
    
});
trendingBtn.addEventListener('click', () => location.hash = 'trends');
arrowBtn.addEventListener('click', () => {
    //console.log({'dentro arrow': anterior});
    if (window.history.length <= 2) {
        location.hash = '';
        return
    }
        history.back();
  });


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false)

function navigator() {
    //console.log({ location });
    const locHash = location.hash;

    locHash.startsWith('#trends')? trendsPage():
    locHash.startsWith('#search=')? searchPage():
    locHash.startsWith('#movie=')? movieDetailsPage():
    locHash.startsWith('#category=')? categoriesPage():
    homePage()

    // window.scroll({
    //     top: 0,
    //     behavior: 'smooth'
    //   });
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

    const [categ, categoryData] = location.hash.split('=');// ['#category','id-name']
    const [categoryId, categoryName] = categoryData.split('-');
    // console.log(categoryId);
    headerCategoryTitle.innerHTML= decodeURIComponent(categoryName);
    getMoviesByCategory(categoryId);
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

    const [searc, query] = location.hash.split('=');
    const busqueda = decodeURIComponent(query);
    //console.log(busqueda);
    headerCategoryTitle.innerHTML= `Resultados: ${busqueda}`
    getMoviesBySearch(busqueda);
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

    headerCategoryTitle.innerHTML= 'Tendencias';
    getTrendingMovies();
}