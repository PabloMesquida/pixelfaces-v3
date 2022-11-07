import styled from "styled-components";

export const AvatarCont = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarImg = styled.img`
  position: relative;
  top: -50px;
  width: 80%;
  max-width: 380px;
  border-radius: 380px;
  border: 1px solid ${({ theme }) => theme.colors.colorTwo};
  @media (min-width: 900px) {
    width: 80%;
    top: 0px;
  }
`;
