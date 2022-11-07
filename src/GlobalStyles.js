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
  height:100%;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.colorOne};
  background: rgb(0,29,61);
  background: -moz-radial-gradient(circle at top, rgba(0,29,61,1) 0%, rgba(0,18,40,1) 20%, rgba(0,8,20,1) 100%);
  background: -webkit-radial-gradient(circle at top, rgba(0,29,61,1) 0%, rgba(0,18,40,1) 20%, rgba(0,8,20,1) 100%);
  background: radial-gradient(circle at top, rgba(0,29,61,1) 0%, rgba(0,18,40,1) 20%, rgba(0,8,20,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#001d3d",endColorstr="#000814",GradientType=1);

  background-attachment: fixed;

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
  color: ${({ theme }) => theme.colors.colorFour};
}
`;
