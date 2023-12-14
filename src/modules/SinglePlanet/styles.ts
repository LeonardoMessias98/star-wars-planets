import { styled } from "styled-components";

export const SinglePlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 75px);
  padding: 74px 20px;

  background: linear-gradient(0deg, #000000d0, transparent);
`;

export const BackButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 592px;
  margin-top: 115px;

  @media (max-width: 700px) {
    margin-top: 36px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;

  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  svg {
    margin-right: 12px;
  }

  transition: all 0.4s;

  &:hover {
    transform: translateX(-5%);
  }
`;
