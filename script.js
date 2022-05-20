const body = document.getElementById("content");
const search = document.getElementById("search");

function getMovies(inputData) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      'X-RapidAPI-Key': '9ae30173d2mshe0e6c6346179a2fp1dd180jsn391ed5dafc14'
    }
  };
  fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/'+ inputData + '?info=mini_info&limit=10&page=1&titleType=movie', options)
	.then(response => response.json())
	.then(response => {
    console.log(response)
    showMovie(response.results);
  } )
	.catch(err => console.error(err));

}

function showMovie(movies) {
  body.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    var poster = "";
    if (movie.primaryImage) {
        poster = movie.primaryImage.url
    }else {
      poster = "";
    }

    var year = "";
    if (movie.releaseYear) {
        year = movie.releaseYear.year
    }else {
      year = "";
    }

    movieEl.innerHTML = `
      <img 
        src="${poster}" 
        alt="${movie.titleText.text}"
      />
      <div class="movie-info">
      <h3>${movie.titleText.text}</h3>
      <h4>${year}</h4>
      </div>
      `;

    body.appendChild(movieEl);

  });
}

// const button = document.querySelector(".btn");

// button.addEventListener("click", buttonClick);

// function buttonClick(e) {
//   e.preventDefault();

//   const searchTerm = search.value

//   //console.log(searchTerm);

//   if (searchTerm) {
//      getMovies(searchTerm);
//      search.value = "";
//     }
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  
  if (searchTerm) {
  getMovies(searchTerm);
  search.value = "";
  }
});