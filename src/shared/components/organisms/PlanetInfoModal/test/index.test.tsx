import React from "react";
import { render, screen } from "@/shared/providers/tests/renderWrapper";
import "@testing-library/jest-dom";

import PlanetInfoModal from "..";

import { planet } from "./mock";

describe("Should validate filters", () => {
  let getByText: any;

  beforeEach(() => {
    getByText = screen.getByText;
    render(<PlanetInfoModal planet={planet} />);
  });

  it("Should render planet name", () => {
    const nameFilter = getByText(/tatooine/);

    expect(nameFilter).toBeInTheDocument();
  });

  it("Should render planet climate", () => {
    const climate = getByText(/arid/);
    expect(climate).toBeInTheDocument();
  });

  it("Should render planet terrain", () => {
    const terrain = getByText(/desert/);
    expect(terrain).toBeInTheDocument();
  });

  it("Should render planet population", () => {
    const population = getByText(/200000/);
    expect(population).toBeInTheDocument();
  });

  it("Should render a planet resident", () => {
    const resident = getByText(/Luke Skywalker/);
    expect(resident).toBeInTheDocument();
  });

  it("Should render a planet film", () => {
    const film = getByText(/A New Hope/);
    expect(film).toBeInTheDocument();
  });
});
