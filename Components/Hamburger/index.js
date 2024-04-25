import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: left; /* Align items to the end horizontally */
  align-items: flex-end; /* Align items to the end vertically */
  height: 100%; /* Ensure the container takes up the full height of the overlay */

  @media screen and (max-width: 700px) {
    transform: translateY(-20%);
  }
`;

const StyledMenuList = styled.ul`
  padding-left: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: ${(props) => (props.isOpen ? "0" : "-100vh")};
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(217, 217, 217, 0.5); /* Grey semi-transparent color */
  z-index: 100;
  transition: top 1s ease; /* Removed transition for bottom */
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

const MenuHeading = styled.h1`
  font-size: 54px;
  position: relative;
  @media screen and (max-width: 700px) {
    font-size: 40px; /* Change font size for smaller screens */
  }
  &:hover {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 1000%; /* Span the width of the container */
      height: 1px;
      background-color: black;
    }
  }
`;

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Hamburger menu icon SVG */}
      <svg
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
        strokeLinejoin="square"
        style={{
          cursor: "pointer",
          position: "relative",
        }}
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <Overlay isOpen={isOpen} onClick={toggleMenu}>
        <Container>
          <StyledMenuList>
            <li>
              <MenuHeading>
                <StyledLink href="/works">WORKS</StyledLink>
              </MenuHeading>
            </li>
            <li>
              <MenuHeading>
                <StyledLink href="/about">ABOUT</StyledLink>
              </MenuHeading>
            </li>
            <li>
              <MenuHeading>
                <StyledLink href="/imprint">IMPRINT</StyledLink>
              </MenuHeading>
            </li>
          </StyledMenuList>
        </Container>
      </Overlay>
    </>
  );
}
