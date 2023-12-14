import React, { MouseEvent, useEffect } from "react";
import Link from "next/link";

import { IPlanet } from "@/shared/types";
import Loader from "@/shared/components/atoms/Loader";
import convertToPageUrl from "@/shared/utils/convertToPageUrl";

import { ResultsContainer } from "./styles";
import getPlanetImageUrl from "@/shared/utils/getPlanetImageUrl";
import Image from "next/image";

interface IResults {
  planets: IPlanet[];
  isLoading?: boolean;
  onClose: () => void;
}

const Results = ({ planets, isLoading, onClose }: IResults) => {
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
      {isLoading ? (
        <Loader />
      ) : (
        planets.map((planet) => (
          <Link href={convertToPageUrl(planet.url)} key={planet.name}>
            <div className="imgWrapper">
              <Image
                src={getPlanetImageUrl(planet.name)}
                fill={true}
                alt="planet_image"
              />
            </div>
            <section>
              <h2 id="planet">{planet.name}</h2>
              <span>Population: {planet.population}</span>
            </section>
          </Link>
        ))
      )}
    </ResultsContainer>
  );
};

export default Results;
