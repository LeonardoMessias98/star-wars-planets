import React, { useContext, useEffect, useState } from "react";

import { IPlanet } from "@/shared/types";
import SearchIcon from "@/shared/assets/SearchIcon";

import Results from "./components/Result";
import { Input, InputButton, InputContainer } from "./styles";
import FilterContext from "@/shared/providers/contexts/PlanetContexts";

const SearchInput = () => {
  const { nameFilterOrder, populationFilterOrder } = useContext(FilterContext);

  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  async function requestPlanet(search: string): Promise<IPlanet[] | undefined> {
    try {
      const response = await fetch(
        `https://swapi.dev/api/planets/?search=${search}`,
        { cache: "force-cache" }
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

    setPlanets(orderResults(results));
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

  function orderResults(results: IPlanet[]) {
    if (populationFilterOrder === "Ascendent")
      return results.sort((a, b) =>
        Number(a.population) > Number(b.population) ? 1 : -1
      );

    if (populationFilterOrder === "Decrescent")
      return results.sort((a, b) =>
        Number(a.population) < Number(b.population) ? 1 : -1
      );

    if (nameFilterOrder === "Ascendent")
      return results.sort((a, b) => (a.name > b.name ? 1 : -1));

    if (nameFilterOrder === "Decrescent")
      return results.sort((a, b) => (a.name < b.name ? 1 : -1));

    return results;
  }

  useEffect(() => {
    const results = orderResults(planets);
  }, [planets, nameFilterOrder, populationFilterOrder]);

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Enter the name in the planet"
        onChange={handleSearchChange}
      />

      {showResults && (
        <Results
          planets={orderResults(planets)}
          isLoading={isLoading}
          onClose={handleClose}
        />
      )}

      <InputButton onClick={handleSearch} id="search">
        <SearchIcon />
        Search
      </InputButton>
    </InputContainer>
  );
};

export default SearchInput;
