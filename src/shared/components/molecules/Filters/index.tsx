import React, { useContext } from "react";

import SettingIcon from "@/shared/assets/SettingIcon";
import FilterContext from "@/shared/providers/contexts/FilterContexts";

import Filter from "./Filter";
import { FilterTitle, FiltersContainer } from "./styles";

const Filters = () => {
  const {
    nameFilterOrder,
    populationFilterOrder,
    handleSelectNameFilter,
    handleSelectPopulationFilter,
  } = useContext(FilterContext);

  const filterOptsByName = ['Name', 'Ascendent', 'Decrescent'];
  const filterOptsByPopulation = ['Population', 'Equal', 'Greater', 'Less'];

  return (
    <FiltersContainer>
      <FilterTitle>
        <SettingIcon />
        <strong>Filter:</strong>
      </FilterTitle>

      <Filter
        order={nameFilterOrder}
        onSetFilterOrder={handleSelectNameFilter}
        options={filterOptsByName}
      />
      <Filter
        order={populationFilterOrder}
        onSetFilterOrder={handleSelectPopulationFilter}
        options={filterOptsByPopulation}
      />
    </FiltersContainer>
  );
};

export default Filters;
