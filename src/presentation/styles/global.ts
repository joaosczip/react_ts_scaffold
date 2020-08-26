import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, h1, h2, h3, label, p, span {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #fcfcfc;
  }

  button {
    cursor: pointer;
  }
`;
