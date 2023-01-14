import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieSearch from "./routes/movies-search/movieSearch.component";
import MovieSingle from "./routes/movie-single/movieSingle.component.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<MovieSearch />} />
      <Route path="/movie" element={<MovieSingle />} />
    </Routes>
  );
}

export default App;
