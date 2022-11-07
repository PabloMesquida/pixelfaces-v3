import styled from "styled-components";

export const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.colorOne};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 1rem;
`;
