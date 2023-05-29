const api_key = API_KEY;
const url = 'https://api.themoviedb.org/3/';
const trending = 'trending/movie/day';
const idiom = 'es-ES'
const urlenguage = `&language=${idiom}`;
const urlCategories = 'genre/movie/list';
const urlMoviesCat = 'discover/movie'


const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    api_key: KEY_AXIOS,
    language: idiom,
  },
});

const buildMovieImageUrl = (posterPath) => `https://image.tmdb.org/t/p/w300/${posterPath}`;

function createMovies(movies, container) {
  container.innerHTML = '';

  movies.forEach(movie => {
    container.insertAdjacentHTML('beforeend', `
      <div class='movie-container'>
        <img src='${buildMovieImageUrl(movie.poster_path)}' class='movie-img' alt='${movie.title}' />
      </div>
    `)
});
}

async function getTrendingMoviesPreview() {
  try {
      const {data} = await api(trending);

      const movies = data.results;
      //console.log({data, movies});
      
      createMovies(movies, trendingMoviesPreviewList);
      // trendingMoviesPreviewList.innerHTML = '';
      
      // movies.forEach(movie => {
      //     trendingMoviesPreviewList.insertAdjacentHTML('beforeend', `
      //       <div class='movie-container'>
      //         <img src='${buildMovieImageUrl(movie.poster_path)}' class='movie-img' alt='${movie.title}' />
      //       </div>
      //     `)
      // });
      

  } catch (error) {
      console.log('Ocurrió un error: ', error);
  }
}

async function getCategoriesPreview() {
  try {
      const {data} = await api(urlCategories);

      const categories = data.genres;
      // console.log({data, categories});
      categoriesPreviewList.innerHTML = '';
      
      categories.forEach(category => {
        const categoryId = category.id;
        const categoryName = category.name;
        
        const hash = `#category=${categoryId}-${categoryName}`;
  
        categoriesPreviewList.insertAdjacentHTML('beforeend', `
          <div class="category-container">
            <h3 id="id${categoryId}" class="category-title">${categoryName}</h3>
          </div>
        `);
  
        const categoryTitle = document.querySelector(`#id${categoryId}`);
        categoryTitle.addEventListener('click', () => {
          location.hash = hash;
        });
      });
        
  } catch (error) {
      console.log('Ocurrió un error: ', error);
  }
}

async function getMoviesByCategory(id) {
  try {
      const {data} = await api(urlMoviesCat, {
        params:{
          with_genres: id,
        },
      });
      const movies = data.results;

      createMovies(movies, genericSection);
      // genericSection.innerHTML = '';
      
      // movies.forEach(movie => {
      //   genericSection.insertAdjacentHTML('beforeend', `
      //       <div class='movie-container'>
      //         <img src='${buildMovieImageUrl(movie.poster_path)}' class='movie-img' alt='${movie.title}' />
      //       </div>
      //     `)
      // });
      

  } catch (error) {
      console.log('Ocurrió un error: ', error);
  }
}
