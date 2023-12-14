import { styled } from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
`;

export const LogoContainer = styled(ImageWrapper)`
  width: 321px;
  height: 180px;
  margin: 0 0 60px;

  cursor: pointer;

  @media (max-width: 900px) {
    width: 209.263px;
    height: 117.41px;
  }
`;
