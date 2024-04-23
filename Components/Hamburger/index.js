import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  padding-top: 20px;
  padding-right: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: ${(props) => (props.isOpen ? "0" : "-100vh")};
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Grey semi-transparent color */
  z-index: 100;
  transition: top 1s ease; /* Removed transition for bottom */
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Wrapper>
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
      </Wrapper>
      <Overlay isOpen={isOpen} onClick={toggleMenu}>
        <Container>
          <ul>
            <li>
              <h1>
                <StyledLink href="/">HOME</StyledLink>
              </h1>
            </li>
            <li>
              <h1>
                <StyledLink href="/works">WORKS</StyledLink>
              </h1>
            </li>
            <li>
              <h1>
                <StyledLink href="/about">ABOUT</StyledLink>
              </h1>
            </li>
          </ul>
        </Container>
      </Overlay>
    </div>
  );
}
