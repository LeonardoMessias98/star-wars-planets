import React from "react";
import Image from "next/image";

import footerLogo from "@/shared/assets/footer_logo.png";
import { FooterContainer, FooterContent } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</p>
     
        <Image src={footerLogo} alt="Footer Logo" />

      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
