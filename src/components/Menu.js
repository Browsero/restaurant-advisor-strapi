import React from "react";
import styled from "styled-components";
import { bool } from 'prop-types';
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
      <StyledMenu open={open} >
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/restaurants'>Restaurants</Link></p>
        <p><Link to='/contact'>Contact</Link></p>
      </StyledMenu>
  );
};
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ABE188;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-100%);
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};

  p {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 500;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: white;
  }
`;
