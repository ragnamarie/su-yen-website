import { createGlobalStyle } from "styled-components";
import AptosTTF from "public/fonts/aptos-display-italic.ttf";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next {
    margin: 0;
    height: 100vh;
    width: 100vh;
  }

  header {
    display: flex;
    gap: 30%;
    min-width: 100vw;
    justify-content: space-between;
    z-index: 10;
    position: sticky;
    padding: 30px;
  }

  body {
    font-family: Aptos, Fallback, sans-serif;
  }

  ul {
    display: grid;
  }

  li {
    list-style-type: none;
    font-weight: 700;
    font-size: 24px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: black;
  }

  h2 {
    font-weight: 500;
    color: black;
  }
`;
