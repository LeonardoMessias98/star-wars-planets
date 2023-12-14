import { styled } from "styled-components";

interface IPlanetImage {
  source: string;
}

export const ModalContainer = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;

  width: 800px;
  height: 402px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);

  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;

    max-width: 300px;
    width: 100%;
    height: 500px;
  }
`;

export const PlanetImage = styled.div<IPlanetImage>`
  width: 400px;
  height: 402px;

  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    width: 100%;
    height: 188px;
    background-position: center;
    border-radius: 5px;
  }
`;

export const SearchContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 400px;
  padding: 0 25px;

  h1 {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    width: 100%;
    max-width: 292px;
    padding: 0 30px 30px;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 18px;
      padding: 50px 20px 30px;
    }
  }
`;

export const SpaceshipImageWrapper = styled.div`
  width: 462px;
  height: 328px;

  bottom: -138px;
  left: -136px;

  position: absolute;
  animation: floating infinite 10s;

  @keyframes floating {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(-10%);
    }

    100% {
      transform: translateY(0%);
    }
  }

  @media (max-width: 900px) {
    width: 323px;
    height: 229px;
    bottom: unset;
    left: 60px;
    top: 60px;
  }
`;
