import React, { useContext, useState } from "react";

import SearchIcon from "@/shared/assets/SearchIcon";
import useFilterResults from "@/shared/hooks/useFilterResults";

import Results from "./components/Result";
import { Input, InputButton, InputContainer } from "./styles";
import useRequestPlanet from "@/shared/hooks/useRequestPlanet";
import FilterContext from "@/shared/providers/contexts/FilterContexts";

const SearchInput = () => {
  const { handleCleanAllFilters } = useContext(FilterContext);
  const { orderResults, setPopulation } = useFilterResults();
  const { search, planets, isLoading, requestPlanets, setSearch } = useRequestPlanet()


  const [showResults, setShowResults] = useState<boolean>(false);

  async function handleSearch() {
    if (!search) {
      handleCleanAllFilters();
    }

    setShowResults(true);
    requestPlanets();
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value) {
      setSearch(value);
      setPopulation(Number(value))
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
          search={search}
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
