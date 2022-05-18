const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movie87.p.rapidapi.com',
		'X-RapidAPI-Key': '9ae30173d2mshe0e6c6346179a2fp1dd180jsn391ed5dafc14'
	}
};

const body = document.getElementById("#content");
const search = document.getElementById("#search");
const button_title = document.getElementById("#title");
const button_trailer = document.getElementById("#trailer");
const button_genre = document.getElementById("#genre");

getMovies_ByTitle(response);
getMovies_ByTrailer(response);
getMovies_ByGenre(response);

function getMovies_ByTitle(response) {
  fetch('https://movie87.p.rapidapi.com/title/%7Bid%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  const res_data = response.results;

  showMovie_ByTitle(res_data);
}

function getMovies_ByTrailer(response) {
  fetch('https://movie87.p.rapidapi.com/tailor/vid/%7Bid%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  const res_data = response.results;

  showMovie_ByTrailer(res_data);
}

function getMovies_ByGenre(response) {
  fetch('https://movie87.p.rapidapi.com/Movie/gener/come', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  const res_data = response.results;

  showMovie_ByGenre(res_data);
}


function showMovie_ByTitle(movies) {
  body.innerHTML = "";

  movies.forEach((movie) => {
    const {poster_path, title, rating} = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img 
        src="${IMGPATH + poster_path}" 
        alt="${title}"
      />
      <div class="movie-info"> 
        <h3>${title}</h3>
        <span>${rating}</span>
      </div>

      `;

    body.appendChild(movieEl);

  });
}

function showMovie_ByTrailer(movies) {
  body.innerHTML = "";

  movies.forEach((movie) => {
    const {poster_path, title, rating} = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img 
        src="${IMGPATH + poster_path}" 
        alt="${title}"
      />
      <div class="movie-info"> 
        <h3>${title}</h3>
        <span>${rating}</span>
      </div>

      `;

    body.appendChild(movieEl);

  });
  
}

function showMovie_ByGenre(movies) {
  body.innerHTML = "";

  movies.forEach((movie) => {
    const {poster_path, title, rating} = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img 
        src="${IMGPATH + poster_path}" 
        alt="${title}"
      />
      <div class="movie-info"> 
        <h3>${title}</h3>
        <span>${rating}</span>
      </div>

      `;

    body.appendChild(movieEl);

  });
  
}

const button = document.querySelector(".dropdown-menu");

button.addEventListener("click", buttonClick);

function buttonClick(e) {
  e.preventDefault();

  if (search.value && button_title) {

    getMovies_ByTitle(search.value);

  }else if(search.value && button_actor){

    getMovies_ByActor(search.value);

  }else {

    getMovies_ByGenre(search.value);

  }
}

  