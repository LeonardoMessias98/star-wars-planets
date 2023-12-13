import React from "react";

import Footer from "./Footer";
import { WrapperContainer } from "./styles";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <WrapperContainer>
      {children}
      <Footer />
    </WrapperContainer>
  );
};

export default Layout;
