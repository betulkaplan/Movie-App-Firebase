import React, { useRef } from 'react';
import styled from 'styled-components';
import { createUser } from '../auth/firebase';

const Register = () => {
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const password = useRef();

  const handleRegister = () => {
    createUser(
      email.current.value,
      password.current.value,
      fname.current.value + ' ' + lname.current.value
    );
    fname.current.value = '';
    lname.current.value = '';
    email.current.value = '';
    password.current.value = '';
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
        <h3>Register</h3>
        <form>
          <div className="input-field">
            <label htmlFor="fname">First Name</label>
            <br />
            <input
              ref={fname}
              id="fname"
              type="text"
              placeholder="Enter your first name..."
            />
          </div>
          <div className="input-field">
            <label htmlFor="lname">Last Name</label>
            <br />
            <input
              ref={lname}
              id="name"
              type="text"
              placeholder="Enter last first name..."
            />
          </div>
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
              handleRegister();
              //console.log(fname.current.value);
            }}
          >
            Register
          </button>
        </form>
      </div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

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

export default Register;
