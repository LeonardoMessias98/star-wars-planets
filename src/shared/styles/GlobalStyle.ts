import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Inter, sans-serif;
    box-sizing: border-box;


    :focus {
      outline: 0;
    }
  }

  div#__next {
    overflow: hidden;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #000000; 
  }
  
  &::-webkit-scrollbar-thumb {
    background: #181818
  }

`;

export default GlobalStyle;
