import React, { MouseEvent, useEffect, useState } from "react";

import { IPlanet } from "@/shared/types";
import { Input, InputButton, InputContainer } from "./styles";
import Results from "./components/Result";

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

  function handleClose() {
    setShowResults(false);
  }

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Enter the name in the planet"
        onChange={handleSearchChange}
      />

      {showResults && (
        <Results
          planets={planets}
          isLoading={isLoading}
          onClose={handleClose}
        />
      )}

      <InputButton onClick={handleSearch} id="search">
        Search
      </InputButton>
    </InputContainer>
  );
};

export default SearchInput;
