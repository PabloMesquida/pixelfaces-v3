import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: sans-serif;
  line-height: 1.6;
  scroll-behavior: smooth;
  
}

*,
*::after,
*::before {
   box-sizing: inherit;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.colorOne};
  font-family: ${({ theme }) => theme.fonts.txtFont};
  font-size: 1rem;
  color:  ${({ theme }) => theme.colors.txtBaseColor};
  scroll-behavior: smooth;
  @media (min-width: 640px) {
     font-size: 0.9rem;
  }
}

h1{
  font-family: ${({ theme }) => theme.fonts.logoFont}, sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.colorFour};
}
`;
