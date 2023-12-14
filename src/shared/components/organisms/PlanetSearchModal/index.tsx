import React from "react";
import Image from "next/image";

import PlanetImg from "@/shared/assets/desert_planet.png";
import ShapeshipImage from "@/shared/assets/spaceship.png";

import Filters from "../../molecules/Filters";
import SearchInput from "../../atoms/SearchInput";

import {
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

        <SearchInput />

        <Filters />
      </SearchContent>
    </ModalContainer>
  );
};

export default PlanetSearchModal;
