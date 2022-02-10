import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px;
 
}

body {
  font-weight: 400;
  background-color: #f8f8f9;
}

`;