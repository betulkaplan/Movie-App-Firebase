import React, { useContext } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const Favourites = () => {
  const [favourites, setFavourites] = useContext(FavouritesContext);
  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#0d47a1', marginTop: '20px' }}>
        Your favourites
      </h1>
      <MovieContainer>
        {favourites.map((item, index) => (
          <MovieCard movie={item} key={index} />
        ))}
      </MovieContainer>
    </>
  );
};
const MovieContainer = styled.div`
  padding: 10px 150px 10px 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default Favourites;
