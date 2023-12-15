import React, { useContext } from "react";

import SettingIcon from "@/shared/assets/SettingIcon";
import FilterContext from "@/shared/providers/contexts/PlanetContexts";

import Filter from "./Filter";
import { FilterTitle, FiltersContainer } from "./styles";

const Filters = () => {
  const {
    nameFilterOrder,
    populationFilterOrder,
    handleSelectNameFilter,
    handleSelectPopulationFilter,
  } = useContext(FilterContext);

  return (
    <FiltersContainer>
      <FilterTitle>
        <SettingIcon />
        <strong>Filter:</strong>
      </FilterTitle>

      <Filter
        order={nameFilterOrder}
        onSetFilterOrder={handleSelectNameFilter}
      />
      <Filter
        order={populationFilterOrder}
        onSetFilterOrder={handleSelectPopulationFilter}
      />
    </FiltersContainer>
  );
};

export default Filters;
