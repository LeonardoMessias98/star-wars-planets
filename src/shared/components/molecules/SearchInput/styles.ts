import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  
  width: 100%;
  max-width: 301px;
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
  text-transform: capitalize;
`;

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

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
  text-transform: capitalize;
  text-align: center;
  border: none;
`;
