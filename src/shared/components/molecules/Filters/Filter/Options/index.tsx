import React, { MouseEvent } from "react";

import { Option, OptionsContainer } from "./styles";

interface IOptions {
  onClose: () => void;
  onChangeOrder: (order: string) => void;
  options: string[]
}

const Options = ({ onClose, onChangeOrder, options }: IOptions) => {
  function handleChangeOrder(e: MouseEvent) {
    const target = e.target as HTMLElement;

    if (onChangeOrder) onChangeOrder(target.id);

    if (onClose) onClose();
  }

  return (
    <OptionsContainer>
      {options.map(opt => (
        <Option onClick={handleChangeOrder} id={opt} key={opt}>
          {opt}
        </Option>
      ))}

    </OptionsContainer>
  );
};

export default Options;
