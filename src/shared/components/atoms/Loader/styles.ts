import { styled } from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: 45px;

  svg {
    width: 20px;
    height: 20px;

    animation: rotate 1s linear infinite;

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
