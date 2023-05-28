const api_key = API_KEY;
const url = 'https://api.themoviedb.org/3/';
const trending = 'trending/movie/day';
const idiom = 'es-ES'
const urlenguage = `&language=${idiom}`;
const urlCategories = 'genre/movie/list';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    'api_key': KEY_AXIOS,
    'language': idiom,
  },
});

async function getTrendingMoviesPreview() {
  try {
      const {data} = await api(trending);

      const movies = data.results;
      //console.log({data, movies});
      
      // const trendingMoviesPreviewList = document.querySelector('#trendingPreview .trendingPreview-movieList');
      trendingMoviesPreviewList.innerHTML = '';
      
      movies.forEach(movie => {
          trendingMoviesPreviewList.insertAdjacentHTML('beforeend', `
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
      const {data} = await api(urlCategories);

      const categories = data.genres;
      // console.log({data, categories});

      // const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list');
      categoriesPreviewList.innerHTML = '';
      
      categories.forEach(category => {
        
        categoriesPreviewList.insertAdjacentHTML('beforeend', `
            <div class="category-container">
              <h3 id="id${category.id}" class="category-title">${category.name}</h3>
            </div>
          `)
      });
      
  } catch (error) {
      console.log('Ocurrió un error: ', error);
  }
}


