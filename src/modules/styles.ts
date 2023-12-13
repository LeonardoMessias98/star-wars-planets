import { styled } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 185px);
  padding: 74px 0;

  background: linear-gradient(0deg, #000000d0, transparent);
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const LogoWrapper = styled(ImageWrapper)`
  width: 321px;
  height: 180px;
  margin: 0 0 60px;

  @media (max-width: 900px) {
    width: 209.263px;
    height: 117.41px;
  }
`;
