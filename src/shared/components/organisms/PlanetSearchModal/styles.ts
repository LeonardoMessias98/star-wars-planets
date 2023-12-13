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

    width: 300px;
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
    width: 300px;
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
    margin: 30px;
  }

  input {
    width: 100%;
    height: 40px;
    max-width: 301px;

    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    border-radius: 5px;
    border: none;
  }

  button {
    cursor: pointer;
    width: 301px;
    height: 40px;

    margin-top: 8px;
    border-radius: 5px;
    background: #de1212;
    color: #fff;

    font-family: Lato;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    border: none;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 18px;
    }

    input,
    button {
      width: 248px;
      height: 40px;
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

export const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  span {
    display: flex;
    align-items: center;
    margin-right: 12px;

    color: #fff;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    strong,
    p,
    svg {
      color: #fff;
    }

    svg {
      width: 15px;
      margin-right: 5px;
    }
  }
`;
