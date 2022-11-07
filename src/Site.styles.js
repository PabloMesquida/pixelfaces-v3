import styled from "styled-components";

export const SiteContainer = styled.div`
  position: absolute;
  top: 75vh;
  width: 90%;
  max-width: 1200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.colorTwo};
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const PersonalCont = styled.section`
  width: 100%;
  height: 300px;
  background-color: #f00;
  @media (min-width: 900px) {
    width: 80%;
  }
`;

export const InfoCont = styled.section`
  z-index: 100;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.colorTwo};
  @media (min-width: 900px) {
    width: 100%;
    margin: 0 2rem;
  }
`;

export const ContactCont = styled.section`
  width: 100%;
  height: 300px;
  background-color: #00f;

  @media (min-width: 900px) {
    width: 80%;
  }
`;
