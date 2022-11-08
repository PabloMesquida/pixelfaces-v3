import styled from "styled-components";

export const LoaderCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoaderAnim = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: rgb(255, 130, 0);
  background: -moz-linear-gradient(
    90deg,
    rgba(255, 130, 0, 1) 0%,
    rgba(107, 43, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(255, 130, 0, 1) 0%,
    rgba(107, 43, 0, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(255, 130, 0, 1) 0%,
    rgba(107, 43, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff8200",endColorstr="#6b2b00",GradientType=1);
  box-sizing: border-box;
  animation: flipX 1s linear infinite;

  @keyframes flipX {
    0% {
      transform: perspective(200px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
    }
  }
`;

export const LoaderTxt = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin: 2rem;
`;
