import React from "react";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../contexts/movies.context";
import { useNavigate } from "react-router-dom";
import "./movieSingle.style.css";

const MovieSingle = () => {
  const navigate = useNavigate();
  const { selectedMovie } = useContext(MovieContext);

  useEffect(() => {
    if (Object.keys(selectedMovie).length === 0) {
      navigate("/");
    }
  }, [selectedMovie, navigate]);

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="go-back" onClick={goHome}>
        Go to search
      </button>
      <div className="movie-container">
        <div className="movie-img">
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        </div>
        <div className="movie-details">
          <p>{selectedMovie.Title}</p>
          <p>{selectedMovie.Plot}</p>
          <p>
            <span>imdb Rating : </span>
            {selectedMovie.imdbRating}
          </p>
          <p>
            <span>imdb Votes : </span>
            {selectedMovie.imdbVotes}
          </p>
          <p>
            <span>Released : </span>
            {selectedMovie.Released}
          </p>
          <p>
            <span>Director : </span>
            {selectedMovie.Director}
          </p>
          <p>
            <span>Box Office : </span>
            {selectedMovie.BoxOffice}
          </p>
          <p>
            <span>Awards : </span>
            {selectedMovie.Awards}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieSingle;
