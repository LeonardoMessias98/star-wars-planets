import React, { useState } from "react";

import SettingIcon from "@/shared/assets/SettingIcon";
import ChevronDownIcon from "@/shared/assets/ChevronDownIcon";
import { FilterOption, FilterTitle, FiltersContainer } from "./styles";

const Filters = () => {
  const [filterId, setFilterId] = useState<string>("");

  function handleActiveFilter(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLSpanElement;
    const id = target.id || "";

    setFilterId(id);

    if (filterId === id) {
      setFilterId("");
    }
  }

  return (
    <FiltersContainer>
      <FilterTitle>
        <SettingIcon />
        <strong>Filter:</strong>
      </FilterTitle>

      <FilterOption onClick={handleActiveFilter} isActive={filterId === "name"}>
        <ChevronDownIcon />
        <p id="name">Name</p>
      </FilterOption>

      <FilterOption
        isActive={filterId === "population"}
        onClick={handleActiveFilter}
      >
        <ChevronDownIcon />
        <p id="population">Population</p>
      </FilterOption>
    </FiltersContainer>
  );
};

export default Filters;
