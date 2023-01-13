import { useState } from "react";
import axios from "axios";
import "./movieSearch.css";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  var results = [];

  const API_KEY = "b27d49c0";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
      );
      console.log(res.data);
      if (res.data.Response === "False") {
        alert("Movie not found, please try again.");
        setSearchTerm("");
        setSearchResults("");
      } else {
        const promises = res.data.Search.map(async (element) => {
          return await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&i=${element.imdbID}`
          )
            .then((response) => response.json())
            .then((data) => results.push(data));
        });
        await Promise.all(promises);
        setSearchResults(results);
        console.log(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <input
            className="input-search"
            type="text"
            placeholder="Search for a movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Go </button>
        </form>
      </div>
      <div className="movies-container">
        {Array.isArray(searchResults) && searchResults.length > 0 && (
          <div>
            <h2>Recommended Movies : </h2>
            <ul className="movies-list">
              {searchResults.slice(0, 8).map((movie) => (
                <li key={movie.imdbID} className="movies">
                  <h1>{movie.Title}</h1>
                  <img src={movie.Poster} />
                  <p>{movie.Year}</p>
                  <p>{movie.Genre}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
