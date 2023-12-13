import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fff;

  padding: 20px 0;
`;

export const FooterContent = styled.footer`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 735.19px;

  p {
    font-family: Lato;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;

    padding-right: 64px;
    margin-right: 64px;
    border-right: 1px solid black;
    height: 44px;

    display: flex;
    align-items: center;
  }

  @media (max-width: 900px) {
    p {
      display: none;
    }
  }
`;
