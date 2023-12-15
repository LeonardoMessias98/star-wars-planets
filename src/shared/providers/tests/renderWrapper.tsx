import { ReactNode } from "react";
import LayoutWrapper from "@/shared/providers/Layout";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { FilterContextProvider } from "../contexts/FilterContexts";

jest.mock("next/router", () => require("next-router-mock"));


interface IProvider {
  children: ReactNode;
}

const Providers = ({ children }: IProvider) => {
  return (
    <LayoutWrapper>
      <FilterContextProvider>{children}</FilterContextProvider>
    </LayoutWrapper>
  );
};

const Wrapper = (ui: JSX.Element, options?: any) => {
  return render(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";
export { Wrapper as render };
