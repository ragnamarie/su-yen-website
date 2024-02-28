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
    min-width: 90vw;
    justify-content: space-between;
    z-index: 10;
    position: sticky;
  }

  body {
    font-family: Aptos, Fallback, sans-serif;
  }

  @font-face {
    font-family: 'Aptos';
    src: url(${AptosTTF}) format('truetype');
    /* Add other font formats if needed */
  }

  ul {    
    display: flex;
    gap: 30%;
    padding-right: 5%;
  }

  li {
    list-style-type: none;
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
