import React from "react";
import Image from "next/image";

import Logo from "@/shared/assets/logo.png";

import { HomeContainer, LogoWrapper } from "./styles";
import PlanetSearchModal from "@/shared/components/organisms/PlanetSearchModal";

const HomeModule = () => {
  return (
    <HomeContainer>
      <LogoWrapper>
        <Image src={Logo.src} alt="logo" className="logo" fill={true} />
      </LogoWrapper>

      <PlanetSearchModal />
    </HomeContainer>
  );
};

export default HomeModule;
