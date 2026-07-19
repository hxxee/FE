import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.22) transparent;
  }

  *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    border-radius: 999px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
  }

  body {
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Pretendard Variable', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
