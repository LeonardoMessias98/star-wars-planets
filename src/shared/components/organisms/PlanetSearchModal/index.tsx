import React from "react";
import Image from "next/image";

import SettingIcon from "@/shared/assets/SettingIcon";
import PlanetImg from "@/shared/assets/desert_planet.png";
import ShapeshipImage from "@/shared/assets/spaceship.png";
import ChevronDownIcon from "@/shared/assets/ChevronDownIcon";

import {
  Filters,
  ModalContainer,
  PlanetImage,
  SearchContent,
  SpaceshipImageWrapper,
} from "./styles";

const PlanetSearchModal = () => {
  return (
    <ModalContainer>
      <PlanetImage source={PlanetImg.src} />

      <SpaceshipImageWrapper>
        <Image src={ShapeshipImage.src} alt="Shapeship" fill={true} />
      </SpaceshipImageWrapper>

      <SearchContent>
        <h1>
          Discover all the information about Planets of the Star Wars Saga
        </h1>
        <input type="text" placeholder="Enter the name in the planet" />
        <button>Search</button>

        <Filters>
          <span>
            <SettingIcon />
            <strong>Filter:</strong>
          </span>

          <span>
            <ChevronDownIcon />
            <p>Name</p>
          </span>

          <span>
            <ChevronDownIcon />
            <p>Population</p>
          </span>
        </Filters>
      </SearchContent>
    </ModalContainer>
  );
};

export default PlanetSearchModal;
