import styled from "styled-components";

export const LogosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0 2.5rem 0;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.colorTwo};
`;
