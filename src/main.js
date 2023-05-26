const api_key = API_KEY;
const urlTrending = 'https://api.themoviedb.org/3/trending/movie/day';
const idiom = 'es'
const urlenguage = `&language=${idiom}`;

async function getTrendingMoviesPreview() {
    try {
        const res = await fetch(urlTrending + api_key + urlenguage);
        const data = await res.json();

        const movies = data.results;
        console.log({data, movies});

        movies.forEach(movie => {
            const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
            trendingPreviewMoviesContainer.innerHTML = '';
            
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

            movies.forEach(movie => {
                trendingPreviewMoviesContainer.insertAdjacentHTML('beforeend', `
                  <div class='movie-container'>
                    <img src='https://image.tmdb.org/t/p/w300/${movie.poster_path}' class='movie-img' alt='${movie.title}' />
                  </div>
                `)
              });
        });

    } catch (error) {
        console.log('Ocurrió un error: ', error);
    }
}

getTrendingMoviesPreview();