import React from "react";
import { createContext, useState } from "react";

export const MovieContext = createContext({
  selectedMovie: {},
});

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const value = { selectedMovie, setSelectedMovie };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
