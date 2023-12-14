import React from "react";

import ResidentIcon from "@/shared/assets/ResidentIcon";
import { IPlanet } from "@/shared/types";
import { ResidentsContainer } from "./styles";

interface IResidents {
  planet: IPlanet;
}

const Residents = ({ planet }: IResidents) => {
  return (
    <ResidentsContainer>
      <span>
        <ResidentIcon />
        <strong>Residents:</strong>
      </span>

      <div className="film-list">
        {planet.residents.map((resident) => (
          <p key={resident.name}>{resident.name}</p>
        ))}
      </div>
    </ResidentsContainer>
  );
};

export default Residents;
