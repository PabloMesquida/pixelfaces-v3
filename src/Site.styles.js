import styled from "styled-components";

export const SiteContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: 70vh;
  width: 90%;
  max-width: 1200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  margin-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.colorTwo};
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.colorTwo};
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const PersonalCont = styled.section`
  width: 100%;
  height: 300px;
  @media (min-width: 900px) {
    width: 70%;
  }
`;

export const InfoCont = styled.section`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.colorThree};
  border-radius: 10px;
  margin: 2rem 0;
  @media (min-width: 900px) {
    width: 100%;
    margin: 0 2rem;
  }
`;

export const ContactCont = styled.section`
  width: 100%;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.colorTwo};
  border-radius: 10px;
  @media (min-width: 900px) {
    width: 70%;
  }
`;
