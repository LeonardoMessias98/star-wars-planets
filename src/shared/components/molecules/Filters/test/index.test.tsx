import React from "react";
import {
  fireEvent,
  render,
  screen,
} from "@/shared/providers/tests/renderWrapper";
import "@testing-library/jest-dom";
import Filters from "..";

describe("Should validate filters", () => {
  beforeEach(() => {
    render(<Filters />);
  });

  it("Should render name filter", () => {
    const getByText = screen.getByText;
    const nameFilter = getByText("Name");

    expect(nameFilter).toBeInTheDocument();
  });

  it("Should render population filter", () => {
    const getByText = screen.getByText;
    const nameFilter = getByText("Population");

    expect(nameFilter).toBeInTheDocument();
  });
});
