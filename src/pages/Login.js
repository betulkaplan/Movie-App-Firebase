import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { signIn } from '../auth/firebase';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const history = useHistory();

  const handleLogin = () => {
    signIn(email.current.value, password.current.value);
    history.push('/');
  };
  return (
    <RegisterContainer>
      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1622838650122-51b277788e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt=""
        />
      </div>
      <div className="form">
        <h3>Login</h3>
        <form>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <br />
            <input
              ref={email}
              id="email"
              type="text"
              placeholder="Enter your email address..."
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <br />
            <input
              ref={password}
              id="password"
              type="password"
              placeholder="Enter your password..."
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;

  .banner {
    flex: 3;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .form {
    margin-top: 60px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 60px;
      font-weight: lighter;
    }
    .input-field {
      margin-top: 20px;
    }

    button {
      margin-top: 20px;
      width: 100%;
      border: none;
      border-radius: 5px;
      color: white;
      background-color: #0d47a1;
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: #0d47a1;
        border: 2px solid #0d47a1;
      }
    }
  }
`;

export default Login;
