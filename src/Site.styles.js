import styled from "styled-components";

export const SiteMargins = styled.div`
  z-index: 10;
  position: absolute;
  top: 70vh;
  display: flex;
  justify-content: center;
`;

export const SiteContainer = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.colorTwo};
  overflow: hidden;
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
  padding-top: 1.5rem;
  @media (min-width: 900px) {
    padding: 2rem 0;
    flex-direction: row;
  }
`;

export const PersonalCont = styled.section`
  margin: 0 0 0 2rem;
  @media (min-width: 900px) {
    width: 40%;
    min-width: 300px;
  }
`;

export const InfoCont = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.colorThree};
  border-radius: 10px;
  margin: 2rem 0;
  padding: 1rem;
  @media (min-width: 900px) {
    width: 100%;
    margin: 0 2rem;
    padding: 2rem;
  }
`;

export const ContactCont = styled.section`
  width: 100%;
  @media (min-width: 900px) {
    width: 100%;
  }
`;
