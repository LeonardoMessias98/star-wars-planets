import React, { MouseEvent, useEffect } from "react";

import ChevronDownIcon from "@/shared/assets/ChevronDownIcon";
import ChevronUpIcon from "@/shared/assets/ChevronUpIcon";

import { Option, OptionsContainer } from "./styles";

interface IOptions {
  onClose: () => void;
  onChangeOrder: (order: string) => void;
}

const Options = ({ onClose, onChangeOrder }: IOptions) => {
  function handleChangeOrder(e: MouseEvent) {
    const target = e.target as HTMLElement;

    if (onChangeOrder) onChangeOrder(target.id);

    if (onClose) onClose();
  }

  return (
    <OptionsContainer>
      <Option onClick={handleChangeOrder} id="Ascendent">
        Ascendent
      </Option>

      <Option onClick={handleChangeOrder} id="Decrescent">
        Decrescent
      </Option>
    </OptionsContainer>
  );
};

export default Options;
