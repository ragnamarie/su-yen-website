import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next {
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
  }

  header {
    display: flex;
    gap: 30%;
    justify-content: space-between;
    z-index: 10;
    position: sticky;
    padding: 30px;
    min-width: 100vw;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    height: 100vh;
    max-width: 100%;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  
  p {
    margin: 0;
  }


`;
