const X_Rapid_APIURL = "https://streaming-availability.p.rapidapi.com?api_key=9ae30173d2mshe0e6c6346179a2fp1dd180jsn391ed5dafc14";
const TMDB_APIURL = "https://api.themoviedb.org/3/movie/550?api_key=6e3cca9aefb3a98e3fb5a3cc02e5eadd";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=6e3cca9aefb3a98e3fb5a3cc02e5eadd";

const text = document.getElementsByClassName('.form-control');

const main = document.getElementById('#content');

getMovies_Rapid(X_Rapid_APIURL);
getMovies_Tmdb(TMDB_APIURL);

async function getMovies_Rapid(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.results);
};

async function getMovies_Tmdb(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.results);
};


function showMovies() {



};

function getMovieByRating() {


};


dropdown-item.addElementListener("click", (e) => {

  e.preventDefault();

  const searchItem = text.value;

  if (searchItem) {

    getMovies_Rapid(SEARCHAPI + searchItem);

  }

  text.value = "";
});

