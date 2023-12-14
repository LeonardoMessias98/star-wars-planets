import React from "react";
import Films from "./components/Films";
import Residents from "./components/Residents";

import { IPlanet } from "@/shared/types";
import { InfoModalContainer } from "./styles";
import MainInfo from "./components/MainInfo";

interface ISinglePlanet {
  planet: IPlanet;
}

const PlanetInfoModal = ({ planet }: ISinglePlanet) => {
  return (
    <InfoModalContainer>
      <MainInfo planet={planet} />

      <Residents planet={planet} />

      <Films planet={planet} />
    </InfoModalContainer>
  );
};

export default PlanetInfoModal;
