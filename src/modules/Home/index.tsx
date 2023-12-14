import React from "react";

import PlanetSearchModal from "@/shared/components/organisms/PlanetSearchModal";
import StarWarsLogo from "@/shared/components/atoms/StarWarsLogo";
import { HomeContainer } from "./styles";

const HomeModule = () => {
  return (
    <HomeContainer>
      <StarWarsLogo />

      <PlanetSearchModal />
    </HomeContainer>
  );
};

export default HomeModule;
