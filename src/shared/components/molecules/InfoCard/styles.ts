import { styled } from "styled-components";

export const InfoCard = styled.section`
  background: #f1f1f1;
  padding: 15px;
  border-radius: 8px;

  span {
    display: flex;
    align-items: center;

    width: 100%;
    border-bottom: 2px solid #ccc;
    padding: 0 0 10px;
    margin: 0 0 15px;

    svg {
      margin-right: 5px;
    }

    & + div {
      text-transform: capitalize;
    }
  }

  .film-list {
    display: flex;
    flex-wrap: wrap;

    p:after {
      content: ",";
    }

    p:last-child:after {
      content: ".";
    }

    p {
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      margin-right: 5px;
    }
  }
`;
