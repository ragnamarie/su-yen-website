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
    justify-content: space-between;
    z-index: 10;
    position: sticky;
    padding-left: 20px;
    min-width: 100vw;
  }

  body {
    font-family: 'Inter', sans-serif; /* Updated font-family */
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

  h1 {
    font-weight: 300;
    color: black;
    position: relative;
  }
  
  h1::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px; /* Adjust this value to control the distance from the text */
    width: 125%;
    height: 1px;
    background-color: black;
  }

  h2 {
    font-weight: 500;
    color: black;
  }
`;
