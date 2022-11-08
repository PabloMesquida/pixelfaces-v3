import styled from "styled-components";

export const LocationTxt = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2rem 0 0 0;
  padding-top: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.txtDesColor};
  @media (min-width: 900px) {
    width: 80%;
  }
`;
