import { createGlobalStyle } from "styled-components";
import Aptos from "/public/fonts/Aptos.ttf";

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

  @font-face {
    font-family: 'YourFontName';
    src: url(${Aptos}) format('truetype'), url(${Aptos}) format('tff');
    /* Add other font formats if needed */
}

`;
