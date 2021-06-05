import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <FooterContainer>&copy; bettythebeth designed - 2021</FooterContainer>;
};

const FooterContainer = styled.div`
  background: #0d47a1;
  color: white;
  padding: 20px;
  text-align: center;

  width: 100%;
`;

export default Footer;
