import React from "react";
import Search from "./Search";
import axios from "axios";

function Home() {
  function addItem(inputText) {
    getMovies(inputText);
  }

  function getMovies(inputText) {
    axios
      .get("http://www.omdbapi.com?s=" + inputText + "&apikey=21c45398")
      .then((response) => {
        let movies = response.data.Search;
        let output = "";
        movies.map((movie, index) => {
          output += `
            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="well text-center">
                <img src="${movie.Poster}">
                <h6>${movie.Title}</h6>
                  <button 
                  onclick="movieSelected('${movie.imdbID}')"
                  class="btn btn-primary"
                >Movie Details</button>
              </div>
            </div>
          `;
        });

        document.getElementById("movies").innerHTML = output;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  window.movieSelected = (id) => {
    sessionStorage.setItem("movieId", id);
    window.location = `details/${id}`;
    return false;
  };

  return (
    <div>
      <Search onAdd={addItem} />

      <div className="container">
        <div id="movies" className="mt-4 row"></div>
      </div>
    </div>
  );
}

export default Home;
