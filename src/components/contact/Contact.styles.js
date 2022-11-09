import styled from "styled-components";

export const ContactCard = styled.section`
  padding: 2rem;

  margin: 1rem 1rem 3rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.colorTwo};
  border-radius: 10px;
  @media (min-width: 900px) {
    margin: 2rem 0;
  }
`;

export const Title = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.colorSix};
`;

export const Cookies = styled.div`
  padding-top: 2rem;
  font-size: 0.7rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.colorSix};
  border-top: 1px solid ${({ theme }) => theme.colors.colorTwo};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.colorSix};
  }

  a:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.colorSix};
  }
`;
