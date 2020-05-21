import React from "react";
import axios from "axios";
import * as rb from "react-bootstrap";

function Details(props) {
  let movieId = sessionStorage.getItem("movieId");

  if (movieId === props.match.params.id) {
    axios
      .get("http://www.omdbapi.com?i=" + movieId + "&apikey=21c45398")
      .then((response) => {
        // console.log(response);
        let movie = response.data;
        getMovie(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMovie(movie) {
    let storeResult = `
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <img src="${movie.Poster}" class="thumbnail">
            </div>
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <h2>${movie.Title}</h2>
                <ul class="list-group">
                    <li class="list-group-item">
                        <strong>Genre</strong>
                        ${movie.Genre}
                    </li>
                    <li class="list-group-item">
                        <strong>Released</strong>
                        ${movie.Released}
                    </li>
                    <li class="list-group-item">
                        <strong>IMDB Rating</strong>
                        ${movie.imdbRating}
                    </li>
                    <li class="list-group-item">
                        <strong>Director</strong>
                        ${movie.Director}
                    </li>
                    <li class="list-group-item">
                        <strong>Writer</strong>
                        ${movie.Writer}
                    </li>
                    <li class="list-group-item">
                        <strong>Actors</strong>
                        ${movie.Actors}
                    </li>
                </ul>
            </div>
        </div>
        <div class="row"> 
            <div class="moviePlot pl-4 pr-4 mt-4 mb-4">
                <h3>Plot</h3>
                ${movie.Plot}
                <hr>
                <a href="http://imdb.com/title/${movie.imdbID}" 
                target="_blank" 
                class="btn btn-primary">
                View IMDB
                </a>
                <a href="/" class="btn btn-default">Go Back</a>
            </div>
        </div>
      `;
    document.getElementById("movie").innerHTML = storeResult;
  }

  return (
    <div>
      <rb.Container>
        <div id="movie" className="moviePlot"></div>
      </rb.Container>
    </div>
  );
}

export default Details;
