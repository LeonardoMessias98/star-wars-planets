import { css, styled } from "styled-components";

interface IFilterTitle {
  isActive?: boolean;
}

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 20px;

  @media (max-width: 900px) {
    gap: 10px 8px;
  }
`;

export const FilterTitle = styled.span<IFilterTitle>`
  display: flex;
  align-items: center;

  color: #fff;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  strong,
  p,
  svg {
    color: #fff;
  }

  svg {
    width: 15px;
    margin-right: 5px;
  }
`;

export const FilterOption = styled(FilterTitle)`
  padding-right: 4px;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: translateY(+5%);
  }

  ${(props) =>
    props.isActive &&
    css`
      background: #fff;
      border-radius: 2px;

      svg,
      p {
        color: #000;
        stroke: #000;
      }
    `}
`;
