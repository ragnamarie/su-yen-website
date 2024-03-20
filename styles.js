import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #__next {
    margin: 0;
    height: 100vh;
    width: 100%;
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
    height: 100vh;
    width: 100%;
  }

  ul {
    display: grid;
    justify-content: center;
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

  @media only screen and (max-width: 768px) {
    /* Adjust styles for screens up to 768px wide (e.g., iPhones) */
    header {
      gap: 10%; /* Adjust the gap between elements */
      padding: 10px; /* Adjust padding */
    }
    li {
      font-size: 18px; /* Adjust font size */
    }
  }
`;
