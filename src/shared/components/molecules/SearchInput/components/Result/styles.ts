import { styled } from "styled-components";

export const ResultsContainer = styled.div`
  position: absolute;

  width: 100%;
  background: #fff;
  margin: 45px 0 0;
  border-radius: 5px;
  box-shadow: 0 0 20px 0px #343434;
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
  }

  a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    text-decoration: none;
    height: max-content;
    color: #000;
    border-radius: 5px;
    column-gap: 10px;
    cursor: pointer;

    &:hover {
      background: #ddd;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 5px;

      h2 {
        font-family: Lato;
        font-size: 16px;
        font-weight: 600;
        line-height: 17px;
      }

      span {
        font-family: Lato;
        font-size: 14px;
        font-weight: 500;
        color: #343434;
      }
    }
  }

  .imgWrapper {
    position: relative;
    width: 50px;
    height: 50px;
  }
`;
