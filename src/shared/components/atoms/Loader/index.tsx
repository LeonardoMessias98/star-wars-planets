import React from "react";
import { FiLoader } from "react-icons/fi";

import { LoaderContainer } from "./styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <FiLoader />
    </LoaderContainer>
  );
};

export default Loader;
