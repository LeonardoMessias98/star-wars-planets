import { styled } from "styled-components";

export const MainInfoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    justify-content: center;
    gap: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const PlanetImage = styled.div`
  position: relative;

  width: 74px;
  height: 74px;

  animation: infinite rotate 60s;

  @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
`;

export const PlanetName = styled.section`
  position: relative;
  margin: 12px 0 0 12px;
  height: max-content;

  section {
    display: flex;
    align-items: center;
    margin-top: 5px;

    button {
      display: flex;
      background: none;
      border: none;
      font-size: 22px;
      cursor: pointer;
      margin: 0 5px;
    }
  }

  h2 {
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 130px;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
  }

  h2,
  h4,
  input {
    font-family: Montserrat;
    font-style: normal;
    line-height: normal;

    color: #000;
  }

  h2,
  input {
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
  }

  input {
    border-radius: 5px;
    border: 1px solid #ccc;
    max-width: 130px;
  }
`;

export const Info = styled.div`
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  max-width: 290px;

  &,
  span {
    display: flex;
    text-transform: capitalize;
  }

  span {
    align-items: center;

    svg {
      margin-right: 15px;
    }

    strong,
    p {
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      color: #000;
      line-height: normal;
    }

    strong {
      margin-right: 5px;
      font-weight: 700;
    }

    p {
      font-weight: 400;
    }
  }
`;
