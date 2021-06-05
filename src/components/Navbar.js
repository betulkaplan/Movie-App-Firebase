import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signOut } from '../auth/firebase';

const Navbar = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const handleClick = (path) => {
    history.push(`/${path}`);
  };
  return (
    <NavbarContainer>
      <div
        className="left-side"
        onClick={() => {
          history.push('/');
        }}
      >
        <h1>React Movie App</h1>
      </div>
      <NavRight>
        <BsHeart
          className="favourites"
          onClick={() => {
            history.push('/favourites');
          }}
        />
        {!currentUser ? (
          <button onClick={() => handleClick('login')}>Login</button>
        ) : (
          <span className="user" onClick={() => handleClick('')}>
            {currentUser?.displayName}
          </span>
        )}
        {!currentUser ? (
          <button onClick={() => handleClick('register')}>Register</button>
        ) : (
          <button onClick={() => signOut()}>Logout</button>
        )}
      </NavRight>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background: #0d47a1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  h1 {
    font-size: 20px;
    font-weight: lighter;
  }
  & > div {
    cursor: pointer;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 20px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: 1px solid white;
    border-radius: 7px;
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    &:active {
      transform: scale(0.97);
    }
    &:hover {
      background-color: white;
      color: #0d47a1;
    }
  }

  .user {
    margin-left: 20px;
  }

  .favourites {
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.7s ease;
    &:hover {
      transform: scale(1.3);
      transition: all 0.7s ease;
    }
  }
`;

export default Navbar;
