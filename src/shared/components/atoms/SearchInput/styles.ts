import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  max-width: 301px;
`;

export const Results = styled.div`
  position: absolute;

  width: 100%;
  background: #fff;
  margin: 45px 0 0;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 0 20px 0px #343434;

  h2 {
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 17px;

    padding: 10px 0;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  height: 40px;

  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
`;

export const InputButton = styled.button`
  cursor: pointer;
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
`;
