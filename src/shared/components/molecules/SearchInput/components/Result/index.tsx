import React, { MouseEvent, useEffect } from "react";
import Link from "next/link";

import { IPlanet } from "@/shared/types";
import Loader from "@/shared/components/atoms/Loader";
import convertToPageUrl from "@/shared/utils/convertToPageUrl";

import {
  ImageWrapper,
  NotFoundText,
  PlanetInfo,
  ResultsContainer,
} from "./styles";
import getPlanetImageUrl from "@/shared/utils/getPlanetImageUrl";
import Image from "next/image";

interface IResults {
  planets: IPlanet[];
  isLoading?: boolean;
  searchInput: string;
  onClose: () => void;
}

const Results = ({ planets, searchInput, isLoading, onClose }: IResults) => {
  const planetNotFound = !isLoading && !planets.length && searchInput;

  const closeResultModal = (ev: MouseEvent<HTMLElement> | any) => {
    const target = ev.target as HTMLElement;
    const id = target.id;

    const allowedIDs = ["planet", "search"];

    if (!allowedIDs.includes(id)) {
      if (onClose) onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeResultModal);

    return () => document.removeEventListener("click", closeResultModal);
  }, []);

  return (
    <ResultsContainer>
      {planetNotFound ? (
        <NotFoundText id="planet"> Planet not found!</NotFoundText>
      ) : isLoading ? (
        <Loader />
      ) : (
        planets.map((planet) => (
          <Link href={convertToPageUrl(planet.url)} key={planet.name}>
            <ImageWrapper>
              <Image
                src={getPlanetImageUrl(planet.name)}
                fill={true}
                alt="planet_image"
              />
            </ImageWrapper>

            <PlanetInfo>
              <h2 id="planet">{planet.name}</h2>
              <span>Population: {planet.population}</span>
            </PlanetInfo>
          </Link>
        ))
      )}
    </ResultsContainer>
  );
};

export default Results;
