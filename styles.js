import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next {
    margin: 0;
    min-height: 100%;
    min-width: 100%;
  }

  header {
    display: flex;
    gap: 30%;
    justify-content: space-between;
    z-index: 10;
    position: sticky;
    padding: 20px;
    min-width: 100vw;

  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    height: 100%;
    width: 100%;
  }

  main {
    min-width: 100vw;
    padding: 20px;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
    padding: 20px;
    bottom: 0;
    min-width: 100vw;
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
