import React from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";
import {
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

const Burger = ({ open, setOpen }) => {
  const targetElement = document.querySelector("#root");
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
        !open
          ? disableBodyScroll(targetElement)
          : enableBodyScroll(targetElement);
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;

const StyledBurger = styled.button`
  position: absolute;
  z-index: 40 !important;
  top: 3rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "white" : "black")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
