var requestUrl = "https://www.omdbapi.com/?&apikey=e2499fec&t=";
var button = document.querySelector(".btn");
var cardText = document.querySelector(".card-body");
var searchText = document.querySelector(".form-control");
var title = document.querySelector("#title");
var year = document.querySelector("#year");
var rating = document.querySelector("#rating");
var genre = document.querySelector("#genre");
var plot = document.querySelector("#plot");

function getApi() {
  var input = searchText.value;
  var search = requestUrl.concat(input + "&");
  fetch(search)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      title.textContent = "Title: " + data.Title;
      year.textContent = "Title: " + data.Year;
      rating.textContent = "Rating: " + data.Rated;
      genre.textContent = "Genre: " + data.Genre;
      plot.textContent = "Summary: " + data.Plot;
      console.log(data);
    });
}
button.addEventListener("click", getApi);
