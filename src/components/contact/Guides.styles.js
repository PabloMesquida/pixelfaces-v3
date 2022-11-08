import styled from "styled-components";

export const GuideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 2.5rem 0;
`;

export const Guide = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.txtDesColor};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.txtBaseColor};
  }

  a:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.colorSix};
  }
`;
