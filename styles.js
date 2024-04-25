import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next {
    margin: 0;
    min-height: 100vh; /* Change min-height to min-height: 100vh */
    min-width: 100%;
    display: flex;
    flex-direction: column; /* Make sure the container is a column layout */
  }

  header {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  z-index: 10;
  position: sticky;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  min-width: 100vw;
  }

  /* if any layout stuff is weird delete this part */
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  /* if any layout stuff is weird delete this part */
  
  body {
    font-family: 'Inter', sans-serif; /* Updated font-family */
    height: 100%;
    width: 100%;
  }

  main {
    flex: 1; /* This will make the main content area grow to fill the available space */
    min-width: 100vw;
    padding: 20px;
  }

  footer {
    display: flex;
    flex-shrink: 0; /* Prevent the footer from shrinking */
    flex-direction: row;
    justify-content: space-between;    
    padding-left: 20px;
    padding-right: 20px;
    min-width: 100vw;
  } 

  ul {
    display: grid;
    padding: 0px;
  }

  li {
    list-style-type: none;
    font-weight: 300;
    font-size: 24px;
  }

  a {
    text-decoration: none;
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
    width: 400px;
    height: 1px;
    background-color: black;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-weight: 300;
      font-size: 16px;
      color: black;
      position: relative;
    }

    h1::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px; /* Adjust this value to control the distance from the text */
      width: 200px;
      height: 1px;
      background-color: black;
    }
  }

  h2 {
    font-weight: 300;
    color: black;
  }

   h3 {
    font-weight: 500;
    color: black;
    font-style: italic;
  }

  label {
    font-weight: 300;
    font-style: italic;
    margin-top: 8px;
  }

`;
