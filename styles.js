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
position: sticky;
top: 0;
    z-index: 10;
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
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: black;
  }

`;
