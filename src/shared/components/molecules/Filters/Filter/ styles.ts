import { styled } from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: max-content;
  min-width: 85px;
`;

export const SelectedOption = styled.span`
  display: flex;
  align-items: center;

  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 5px;

  color: #fff;
  cursor: pointer;
  padding-right: 4px;
  transition: all 0.4s;

  &:hover {
    transform: translateY(+5%);
  }
`;

