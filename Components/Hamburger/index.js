import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

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
  top: ${(props) =>
    props.isOpen ? "0" : "-100vh"}; /* Start from top or above the viewport */
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: ${(props) =>
    props.isOpen
      ? "url('/hamburger_background.jpg')"
      : "url('/hamburger_background.jpg')"};
  background-size: cover;
  background-position: center;
  z-index: 100;
  transition: top 1.5s ease, opacity 1.5s ease; /* Add transition effect for top and opacity */
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Image
        onClick={toggleMenu}
        src="/hamburger.jpg"
        width={90}
        height={64}
        alt="Hamburger"
      />
      <Overlay isOpen={isOpen}>
        <Container>
          <ul>
            <li>
              <h1>
                <StyledLink onClick={toggleMenu} href="/works">
                  WORKS
                </StyledLink>
              </h1>
            </li>
            <li>
              <h1>
                <StyledLink onClick={toggleMenu} href="/about">
                  ABOUT
                </StyledLink>
              </h1>
            </li>
            <li>
              <h1>
                <StyledLink onClick={toggleMenu} href="/contact">
                  CONTACT
                </StyledLink>
              </h1>
            </li>
          </ul>
          <Wrapper>
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              margin="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </Wrapper>
        </Container>
      </Overlay>
    </div>
  );
}
