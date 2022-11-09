import styled from "styled-components";

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

export const AvatarImg = styled.img`
  position: relative;
  top: -50px;
  width: 80%;
  max-width: 380px;
  border-radius: 380px;
  border: 1px solid ${({ theme }) => theme.colors.colorTwo};
  @media (min-width: 900px) {
    top: 0px;
  }
`;

export const AvatarBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 48px;
  right: calc(50% - 80px);
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  border-radius: 380px;
  padding-left: 7px;
  background-color: ${({ theme }) => theme.colors.colorThree};
  border: 2px solid ${({ theme }) => theme.colors.colorSix};
  @media (min-width: 900px) {
    right: 15%;
    bottom: 0px;
    width: 50px;
    height: 50px;
  }
`;
