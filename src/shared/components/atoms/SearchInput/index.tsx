import React, { MouseEvent, useEffect, useState } from "react";

import { IPlanet } from "@/shared/types";
import Loader from "../Loader";
import { Input, InputButton, InputContainer, Results } from "./styles";
import Link from "next/link";
import convertToPageUrl from "@/shared/utils/convertToPageUrl";

const SearchInput = () => {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  async function requestPlanet(search: string): Promise<IPlanet[] | undefined> {
    try {
      const response = await fetch(
        `https://swapi.dev/api/planets/?search=${search}`
      );

      const repo = await response.json();

      return repo.results;
    } catch (error) {}
  }

  async function handleSearch() {
    setShowResults(true);

    setIsLoading(true);
    const results = await requestPlanet(searchInput);
    setIsLoading(false);

    if (!results) return;

    setPlanets(results);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.value;

    if (value) {
      setSearchInput(value);
    }
  }

  const closeResultModal = (ev: MouseEvent<HTMLElement> | any) => {
    const target = ev.target as HTMLElement;
    const id = target.id;

    const allowedIDs = ["planet", "search"];

    if (!allowedIDs.includes(id)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeResultModal);

    return () => document.removeEventListener("click", closeResultModal);
  }, []);

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Enter the name in the planet"
        onChange={handleSearchChange}
      />

      {showResults && (
        <Results>
          {isLoading ? (
            <Loader />
          ) : (
            planets.map((planet) => (
              <Link href={convertToPageUrl(planet.url)}>
                <h2 id="planet">{planet.name}</h2>
              </Link>
            ))
          )}
        </Results>
      )}

      <InputButton onClick={handleSearch} id="search">
        Search
      </InputButton>
    </InputContainer>
  );
};

export default SearchInput;
