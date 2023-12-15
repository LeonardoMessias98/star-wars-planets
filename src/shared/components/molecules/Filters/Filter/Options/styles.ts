import { styled } from "styled-components";

export const OptionsContainer = styled.ul`
  background-color: #fff;
  position: absolute;
  border-radius: 2px;
  width: 100%;
  top: 25px;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;

  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  padding: 2.5px 10px;
  border-radius: 2px;

  gap: 5px;

  &:hover {
    background: #ddd;
  }

  svg {
    stroke: #000;
  }
`;
