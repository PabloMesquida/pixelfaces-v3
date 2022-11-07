import styled from "styled-components";

let vh = window.innerHeight;

export const MainAnimation = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: ${vh}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainConteiner = styled.div`
  height: 100vh;
  height: ${vh}px;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  position: absolute;
  top: ${(props) => props.top};
  line-height: 0rem;
  letter-spacing: 0rem;
  text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);
  text-align: center;
  font-weight: lighter;
  font-size: 3rem;
  width: 80%;
`;

export const AH1 = styled.a`
  line-height: 0rem;
  letter-spacing: 0rem;
  text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);
  text-align: center;
  text-decoration: none;
  &:link,
  &:visited,
  &:focus,
  &:hover,
  &:active {
    line-height: 3rem;
    letter-spacing: 0rem;
    text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.colorFour};
  }
`;
