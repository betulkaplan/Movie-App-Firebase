import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  return (
    <FavouritesContext.Provider value={[favourites, setFavourites]}>
      {props.children}
    </FavouritesContext.Provider>
  );
};
