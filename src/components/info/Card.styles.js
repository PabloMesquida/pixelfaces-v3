import styled from "styled-components";

export const Card = styled.article``;

export const CardTitle = styled.span`
  color: ${({ theme }) => theme.colors.txtBaseColor};
`;

export const CardDescription = styled.p`
  font-size: 0.85rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.txtDesColor};
`;

export const CardTags = styled.span`
  display: flex;
  align-items: center;
`;

export const CardTag = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
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
