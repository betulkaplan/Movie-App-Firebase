import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FavouritesContext } from '../context/FavouritesContext';

const MovieCard = ({ movie }) => {
  const [favourites, setFavourites] = useContext(FavouritesContext);
  const [hover, setHover] = useState(false);

  return (
    <MovieContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onDoubleClick={() => {
        let x = 0;
        favourites.forEach((item) => {
          if (item.original_title === movie.original_title) x = 1;
        });
        if (x === 0) setFavourites((prev) => [movie, ...prev]);
      }}
    >
      <MoviePoster>
        <img
          src={'https://image.tmdb.org/t/p/w1280' + movie.poster_path}
          alt=""
        />
      </MoviePoster>
      <MovieBanner>{movie.original_title}</MovieBanner>
      <Overlay hover={hover}>
        <h4>Overview:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          consequuntur consectetur quibusdam aperiam odio id animi debitis sequi
          architecto earum maiores quidem sapiente pariatur, voluptatibus in,
          repellat alias repudiandae ipsa, eveniet nulla inventore repellendus.
          Amet facilis accusantium provident suscipit quos, qui distinctio,
          consequatur aliquid labore quasi ipsa laboriosam culpa neque tenetur
        </p>
      </Overlay>
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
`;

const MoviePoster = styled.div`
  flex: 6;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const MovieBanner = styled.div`
  flex: 1;
  background: #0d47a1;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 5px 0 5px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  height: 60%;
  background-color: white;
  right: ${(props) => (!props.hover ? '-100%' : '0')};
  transition: all 0.5s ease;
`;

export default MovieCard;
