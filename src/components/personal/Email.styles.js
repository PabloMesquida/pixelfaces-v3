import styled from "styled-components";

export const EmailTxt = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0 0 0;
  padding-top: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.txtDesColor};
  @media (min-width: 900px) {
    width: 80%;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.txtDesColor};
  }

  a:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.colorSix};
  }
`;
