import React from "react";
import { render, screen } from "@/shared/providers/tests/renderWrapper";
import "@testing-library/jest-dom";
import getPlanetImageUrl from "./getPlanetImageUrl";

describe("Should validate filters", () => {
  it("Should return the correct planet image", () => {
    const planetImage = getPlanetImageUrl("tatooine");

    expect(planetImage).toEqual(
      "https://cryptospro.com.br/planetas/planeta_0000_tatooine.png"
    );
  });

  it("Should return a fallback image for a planet without image", () => {
    const planetImage = getPlanetImageUrl("kamino");

    expect(planetImage).toEqual(
      "https://www.shareicon.net/data/512x512/2015/10/04/651089_question_512x512.png"
    );
  });
});
