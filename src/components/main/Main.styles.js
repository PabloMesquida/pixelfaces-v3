import styled from "styled-components";

let vh = window.innerHeight;

export const MainConteiner = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12rem;
`;

export const MainAnimation = styled.main`
  width: 100%;
  height: 100vh;
  height: ${vh}px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: radial-gradient(
    circle at 50% 30%,
    rgba(0, 29, 61, 0.5) 0%,
    rgba(0, 18, 40, 0.5) 20%,
    rgba(0, 8, 20, 1) 100%
  );
`;

export const H1 = styled.h1`
  line-height: 4rem;
  letter-spacing: 0.1rem;
  text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);
  text-align: center;
`;

export const AH1 = styled.a`
  line-height: 4rem;
  letter-spacing: 0.1rem;
  text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);
  text-align: center;
  text-decoration: none;
  &:link,
  &:visited,
  &:focus,
  &:hover,
  &:active {
    line-height: 4rem;
    letter-spacing: 0.1rem;
    text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.colorFour};
  }
`;

export const Txt = styled.span`
  font-size: 1rem;
  text-align: center;
  line-height: 2rem;
  background-color: transparent;
`;
