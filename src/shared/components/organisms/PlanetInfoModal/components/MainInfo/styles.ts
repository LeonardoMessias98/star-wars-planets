import { styled } from "styled-components";

export const MainInfoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 58px;

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
`;

export const PlanetName = styled.section`
  margin: 6px 0 0 12px;
`;

export const Info = styled.div`
  flex-direction: column;
  row-gap: 15px;

  &,
  span {
    display: flex;
    text-transform: capitalize;
  }

  span {
    align-items: center;
  }

  svg {
    margin-right: 15px;
  }

  strong {
    margin-right: 5px;
  }
`;
