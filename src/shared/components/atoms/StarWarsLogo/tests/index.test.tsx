import React from "react";
import { render, screen } from "@/shared/providers/tests/renderWrapper";
import "@testing-library/jest-dom";

import StarWarsLogo from "../index";

test("Should render star wars logo", () => {
  render(<StarWarsLogo />);

  const getByTestId = screen.getByTestId;
  const logo = getByTestId("logo");

  expect(logo).toBeInTheDocument();
});
