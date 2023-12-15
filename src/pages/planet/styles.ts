import { styled } from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 80px);
  width: 100%;

  svg {
    height: 50px;
    width: 50px;
    color: #fff;
  }
`;
