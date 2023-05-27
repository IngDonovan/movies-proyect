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
      
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
      trendingPreviewMoviesContainer.innerHTML = '';
      
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

// async function getTrendingMoviesPreview() {
//     try {
//         const res = await fetch(url + trending + api_key + urlenguage);
//         const data = await res.json();

//         const movies = data.results;
//         //console.log({data, movies});
        
//         const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
//         trendingPreviewMoviesContainer.innerHTML = '';
        
//         movies.forEach(movie => {
//             trendingPreviewMoviesContainer.insertAdjacentHTML('beforeend', `
//               <div class='movie-container'>
//                 <img src='https://image.tmdb.org/t/p/w300/${movie.poster_path}' class='movie-img' alt='${movie.title}' />
//               </div>
//             `)
//         });
        

//     } catch (error) {
//         console.log('Ocurrió un error: ', error);
//     }
// }

async function getCategoriesPreview() {
  try {
      const {data} = await api(urlCategories);

      const categories = data.genres;
      // console.log({data, categories});

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

// async function getCategoriesPreview() {
//   try {
//       const res = await fetch(url + urlCategories + api_key + urlenguage);
//       const data = await res.json();

//       const categories = data.genres;
//       console.log({data, categories});
      
//       const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
//       previewCategoriesContainer.innerHTML = '';
      
//       categories.forEach(category => {
//         previewCategoriesContainer.insertAdjacentHTML('beforeend', `
//             <div class="category-container">
//               <h3 id="id${category.id}" class="category-title">${category.name}</h3>
//             </div>
//           `)
//       });
      
//   } catch (error) {
//       console.log('Ocurrió un error: ', error);
//   }
// }


getTrendingMoviesPreview();
getCategoriesPreview();