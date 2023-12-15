import React, { useState } from "react";
import Image from "next/image";
import { MdModeEditOutline } from "react-icons/md";

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
  const planetImgUrl = getPlanetImageUrl(planet.name);
  const isFallbackImage = planetImgUrl.includes("shareicon");

  const [planetName, setPlaneName] = useState<string>(planet.name);
  const [showPlanetInputName, setShowPlanetInputName] =
    useState<boolean>(false);

  function handleToggleInputPlanetName() {
    setShowPlanetInputName(!showPlanetInputName);
  }

  return (
    <MainInfoContainer>
      <Profile>
        <PlanetImage isFallbackImage={isFallbackImage}>
          <Image src={planetImgUrl} alt="planet image" fill={true} />
        </PlanetImage>

        <PlanetName>
          <h4>Planet:</h4>
          <section>
            {showPlanetInputName ? (
              <input
                type="text"
                defaultValue={planetName}
                onChange={(e) => setPlaneName(e.target.value)}
              />
            ) : (
              <h2>{planetName}</h2>
            )}

            <button onClick={handleToggleInputPlanetName}>
              <MdModeEditOutline />
            </button>
          </section>
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
