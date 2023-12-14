import React from "react";
import { useRouter } from "next/router";

import { IPlanet } from "@/shared/types";
import ChevronLeft from "@/shared/assets/ChevronLeft";
import StarWarsLogo from "@/shared/components/atoms/StarWarsLogo";
import PlanetInfoModal from "@/shared/components/organisms/PlanetInfoModal";

import { BackButton, BackButtonSection, SinglePlanetContainer } from "./styles";

interface ISinglePlanet {
  planet: IPlanet;
}

export default function SinglePlanetModule({ planet }: ISinglePlanet) {
  const router = useRouter();

  function handleNavigateBack() {
    router.back();
  }
  
  return (
    <SinglePlanetContainer>
      <StarWarsLogo />

      <PlanetInfoModal planet={planet} />

      <BackButtonSection>
        <BackButton onClick={handleNavigateBack}>
          <ChevronLeft />
          Voltar
        </BackButton>
      </BackButtonSection>
    </SinglePlanetContainer>
  );
}
