import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([]);
  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MoviesContext.Provider>
  );
};
