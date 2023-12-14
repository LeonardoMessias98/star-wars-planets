import React from "react";
import Image from "next/image";

import { IPlanet } from "@/shared/types";
import ClimateIcon from "@/shared/assets/ClimateIcon";
import TerrainIcon from "@/shared/assets/TerrainIcon";
import PopulationIcon from "@/shared/assets/PopulationIcon";
import getPlanetImageUrl from "@/shared/utils/getPlanetImageUrl";

import {
  Info,
  PlanetImage,
  PlanetName,
  Profile,
  MainInfoContainer,
} from "./styles";

interface IMainInfo {
  planet: IPlanet;
}

const MainInfo = ({ planet }: IMainInfo) => {
  return (
    <MainInfoContainer>
      <Profile>
        <PlanetImage>
          <Image
            src={getPlanetImageUrl(planet.name)}
            alt="planet image"
            fill={true}
          />
        </PlanetImage>

        <PlanetName>
          <h4>Planet:</h4>
          <h2>{planet.name}</h2>
        </PlanetName>
      </Profile>

      <Info>
        <span>
          <ClimateIcon />
          <strong>Climate:</strong>
          <p>{planet.climate}</p>
        </span>

        <span>
          <TerrainIcon />
          <strong>Terrain:</strong>
          <p>{planet.terrain}</p>
        </span>

        <span>
          <PopulationIcon />
          <strong>Population:</strong>
          <p>{planet.population}</p>
        </span>
      </Info>
    </MainInfoContainer>
  );
};

export default MainInfo;
