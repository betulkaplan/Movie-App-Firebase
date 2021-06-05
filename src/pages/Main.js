import React, { useEffect, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { IoCloseSharp } from 'react-icons/io5';
import { MoviesContext } from '../context/MoviesContext';

const Main = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  const [searchBarNotEmpty, setSearchBarNotEmpty] = useState(false);
  const searchWord = useRef();
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=action'
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result);
        setMovies(res.results);
      });
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetch(
        `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchWord.current.value}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log('ikinci sorgu', res.results);
          setMovies(res.results);
        });
    }
  };

  const inputHandleChange = () => {
    if (searchWord.current.value !== '') setSearchBarNotEmpty(true);
    else setSearchBarNotEmpty(false);
  };

  return (
    <div>
      <SearchBar>
        <div>
          <input
            onChange={inputHandleChange}
            onKeyDown={handleKeyDown}
            ref={searchWord}
            type="text"
            placeholder="Search a movie..."
          />
          {searchBarNotEmpty ? (
            <IoCloseSharp
              className="cancel"
              onClick={() => {
                searchWord.current.value = '';
                setSearchBarNotEmpty(false);
              }}
            />
          ) : null}
        </div>
      </SearchBar>
      <MovieContainer>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </MovieContainer>
    </div>
  );
};

const SearchBar = styled.div`
  background-color: #d2d5d3;
  display: flex;
  justify-content: center;
  padding: 15px;
  div {
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    .cancel {
      cursor: pointer;
      &:active {
        transform: scale(0.9);
      }
    }
    input {
      font-size: 15px;
      border: none;
      outline: none;
    }
  }
`;

const MovieContainer = styled.div`
  padding: 10px 150px 10px 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 50px 10px 50px;
  }
`;

export default Main;
