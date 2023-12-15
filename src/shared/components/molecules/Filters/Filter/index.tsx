import React, { useState } from "react";

import ChevronDownIcon from "@/shared/assets/ChevronDownIcon";
import ChevronUpIcon from "@/shared/assets/ChevronUpIcon";

import { FilterContainer, SelectedOption } from "./ styles";
import Options from "./Options";

interface IFilter {
  order: string;
  onSetFilterOrder: (order: string) => void;
}

const Filter = ({ onSetFilterOrder, order }: IFilter) => {
  const [showOptions, setShowOptions] = useState(false);

  function handleToggleCloseOptions() {
    setShowOptions(!showOptions);
  }

  return (
    <FilterContainer>
      <SelectedOption onClick={handleToggleCloseOptions}>
        {order === "Ascendent" ? <ChevronUpIcon /> : <ChevronDownIcon />}
        <p>{order}</p>
      </SelectedOption>

      {showOptions && (
        <Options
          onClose={handleToggleCloseOptions}
          onChangeOrder={onSetFilterOrder}
        />
      )}
    </FilterContainer>
  );
};

export default Filter;
