import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FavouritesContext } from '../context/FavouritesContext';
import { AuthContext } from '../context/AuthContext';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const MovieCard = ({ movie }) => {
  const [favourites, setFavourites] = useContext(FavouritesContext);
  const [marked, setMarked] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [hover, setHover] = useState(false);

  return (
    <MovieContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <MoviePoster>
        <img
          src={'https://image.tmdb.org/t/p/w1280' + movie.poster_path}
          alt=""
        />
      </MoviePoster>
      <MovieBanner>
        {movie.original_title}{' '}
        {currentUser ? (
          <Rating vote={movie.vote_average}>{movie.vote_average}</Rating>
        ) : null}
      </MovieBanner>
      <Overlay hover={hover}>
        <div
          className="add"
          onClick={() => {
            setMarked(!marked);
            let x = 0;
            favourites.forEach((item) => {
              if (item.original_title === movie.original_title) x = 1;
            });
            if (x === 0) setFavourites((prev) => [movie, ...prev]);
          }}
          marked={marked}
        >
          {!marked ? <BsHeart /> : <BsHeartFill style={{ color: 'red' }} />}
        </div>

        <h4>Overview:</h4>
        <p>{movie.overview}</p>
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
  justify-content: space-between;
  padding: 0 10px 0 10px;
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
  padding: 10px;

  .add {
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

const Rating = styled.span`
  background-color: ${(props) => {
    if (props.vote < 6) return 'red';
    if (props.vote > 6 && props.vote < 6.5) return 'orange';
    if (props.vote > 6.5) return 'green';
  }};
  padding: 5px;
  border-radius: 3px;
`;

export default MovieCard;
