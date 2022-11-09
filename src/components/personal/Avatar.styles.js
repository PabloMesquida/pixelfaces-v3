import styled from "styled-components";
import { animated } from "react-spring";

export const AvatarCont = styled.article`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  @media (min-width: 900px) {
    padding-right: 0;
  }
`;

export const AvatarImg = styled(animated.img)`
  z-index: 20;
  position: relative;
  top: 0px;
  width: 100%;

  max-width: 180px;
  border-radius: 380px;
  @media (min-width: 900px) {
    top: 0px;
    max-width: 380px;
  }
`;

export const AvatarImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
  top: -50px;
  width: 90%;
  padding: 0.5rem;
  max-width: 180px;
  overflow: hidden;
  height: calc(100% - 2%);
  border-radius: 380px;
  border: 4px solid ${({ theme }) => theme.colors.colorTwo};
  background-color: ${({ theme }) => theme.colors.colorOne};
  @media (min-width: 900px) {
    max-width: 380px;
    top: 0px;
  }
`;

export const AvatarBtn = styled.div`
  z-index: 30;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 48px;
  right: calc(40% - 40px);
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 380px;
  padding-left: 7px;
  background-color: ${({ theme }) => theme.colors.colorThree};
  border: 2px solid ${({ theme }) => theme.colors.colorSix};
  @media (min-width: 900px) {
    right: 15%;
    bottom: 0px;
    width: 40px;
    height: 40px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.colorTwo};
    border: 2px solid ${({ theme }) => theme.colors.colorSix};
    cursor: pointer;
  }
`;
