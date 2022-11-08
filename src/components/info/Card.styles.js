import styled from "styled-components";

export const CardContainer = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.colorTwo};
  margin: 1rem 0rem;
  padding: 1rem;
  border-radius: 10px;
`;

export const CardTitle = styled.span`
  color: ${({ theme }) => theme.colors.txtBaseColor};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.txtBaseColor};
  }

  a:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.txtBaseColor};
  }
`;

export const CardDescription = styled.p`
  font-size: 0.85rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.txtDesColor};
`;

export const CardTags = styled.span`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

export const CardTag = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 0.85rem;
`;

export const CardRole = styled.span`
  font-size: 0.85rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.txtDesColor};
  display: block;
`;

export const Item = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 0.5rem;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;
