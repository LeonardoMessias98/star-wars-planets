import { styled } from "styled-components";
import SplashBg from "../../../shared/assets/background-splash.png";

export const WrapperContainer = styled.div`
  position: relative;
  min-height: 100vh;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${SplashBg.src});
`;
