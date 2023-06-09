const api_key = API_KEY;
const url = 'https://api.themoviedb.org/3/';
const trending = 'trending/movie/day';
const idiom = 'es-ES'
const urlenguage = `&language=${idiom}`;
const urlCategories = 'genre/movie/list';
const urlMoviesCat = 'discover/movie';
const urlSearch = 'search/movie';
const urlMovieId = 'movie/';


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
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    movieContainer.innerHTML = `
      <img src='${buildMovieImageUrl(movie.poster_path)}' class='movie-img' alt='${movie.title}' />
    `;
    container.appendChild(movieContainer);

    movieContainer.addEventListener('click', () => {
      location.hash = `#movie=${movie.id}`;
    });
  });
  //En lugar de adjuntar el event listener al contenedor principal, container, ahora se agrega al contenedor de cada película individual, movieContainer. Esto asegurará que el evento solo se active cuando se hace clic en una película específica.
};

function createCategories(categories, container) {
  container.innerHTML = '';
      
  categories.forEach(category => {
    const categoryId = category.id;
    const categoryName = category.name;
    
    const hash = `#category=${categoryId}-${categoryName}`;

    container.insertAdjacentHTML('beforeend', `
      <div class="category-container">
        <h3 id="id${categoryId}" class="category-title">${categoryName}</h3>
      </div>
    `);

    const categoryTitle = document.querySelector(`#id${categoryId}`);
    categoryTitle.addEventListener('click', () => {
      location.hash = hash;
    });
  });
};


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

      createCategories(categories, categoriesPreviewList);

      // categoriesPreviewList.innerHTML = '';
      
      // categories.forEach(category => {
      //   const categoryId = category.id;
      //   const categoryName = category.name;
        
      //   const hash = `#category=${categoryId}-${categoryName}`;
  
      //   categoriesPreviewList.insertAdjacentHTML('beforeend', `
      //     <div class="category-container">
      //       <h3 id="id${categoryId}" class="category-title">${categoryName}</h3>
      //     </div>
      //   `);
  
      //   const categoryTitle = document.querySelector(`#id${categoryId}`);
      //   categoryTitle.addEventListener('click', () => {
      //     location.hash = hash;
      //   });
      // });
        
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

async function getMoviesBySearch(query) {
  try {
      const {data} = await api(urlSearch, {
        params:{
          query, //como el parámetro es igual se puede poner solo uno
        },
      });
      const movies = data.results;

      createMovies(movies, genericSection);      

  } catch (error) {
      console.log('Ocurrió un error: ', error);
  }
}

async function getTrendingMovies() {
  try {
      const {data} = await api(trending);

      const movies = data.results;

      
      createMovies(movies, genericSection);

  } catch (error) {
      console.log('Ocurrió un error: ', error);
  }
}
async function getMovieById(id) {
  try {
      const {data : movie} = await api(urlMovieId+id);

      const movieImgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      headerSection.style.background = `
      linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.35) 19.27%, 
        rgba(0, 0, 0, 0) 29.17%
        ),
        url(${movieImgUrl})
        `;

      movieDetailTitle.textContent = movie.title;
      movieDetailDescription.textContent = movie.overview;
      movieDetailScore.textContent = movie.vote_average.toFixed(1);
    
      createCategories(movie.genres, movieDetailCategoriesList);

      getSimilarMoviesId(id);

  } catch (error) {
      console.log('Ocurrió un error: ', error);
  }
}

async function getSimilarMoviesId(id) {
  try {
    const {data} = await api(`movie/${id}/similar`);
    const similarMovies = data.results;

    createMovies(similarMovies, relatedMoviesContainer)

  } catch (error) {
    console.log('Ocurrió un error: ', error);
  }
}
