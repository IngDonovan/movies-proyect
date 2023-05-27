const api_key = API_KEY;
const url = 'https://api.themoviedb.org/3/';
const trending = 'trending/movie/day';
const idiom = 'es'
const urlenguage = `&language=${idiom}`;
const urlCategories = 'genre/movie/list';

async function getTrendingMoviesPreview() {
    try {
        const res = await fetch(url + trending + api_key + urlenguage);
        const data = await res.json();

        const movies = data.results;
        //console.log({data, movies});
        
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        trendingPreviewMoviesContainer.innerHTML = '';
        
        //movies.forEach(movie => {
            
            // const movieContainer = document.createElement('div');
            // movieContainer.classList.add('movie-container');
            // const movieImg = document.createElement('img');
            // movieImg.classList.add('movie-img');
            // movieImg.setAttribute('alt', movie.title);
            // movieImg.setAttribute(
            //     'src',
            //     'https://image.tmdb.org/t/p/w300' + movie.poster_path,
            // );

            // movieContainer.appendChild(movieImg);
            // trendingPreviewMoviesContainer.appendChild(movieContainer);
          //});
        movies.forEach(movie => {
            trendingPreviewMoviesContainer.insertAdjacentHTML('beforeend', `
              <div class='movie-container'>
                <img src='https://image.tmdb.org/t/p/w300/${movie.poster_path}' class='movie-img' alt='${movie.title}' />
              </div>
            `)
        });
        

    } catch (error) {
        console.log('Ocurrió un error: ', error);
    }
}

async function getCategoriesPreview() {
  try {
      const res = await fetch(url + urlCategories + api_key + urlenguage);
      const data = await res.json();

      const categories = data.genres;
      console.log({data, categories});
      
      const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
      previewCategoriesContainer.innerHTML = '';
      
      categories.forEach(category => {
        previewCategoriesContainer.insertAdjacentHTML('beforeend', `
            <div class="category-container">
              <h3 id="id${category.id}" class="category-title">${category.name}</h3>
            </div>
          `)
      });
      
  } catch (error) {
      console.log('Ocurrió un error: ', error);
  }
}


getTrendingMoviesPreview();
getCategoriesPreview();