import React from "react";

import { IPlanet } from "@/shared/types";
import ResidentIcon from "@/shared/assets/ResidentIcon";
import { ResidentsContainer } from "./styles";

interface IResidents {
  planet: IPlanet;
}

const Residents = ({ planet }: IResidents) => {
  return (
    <>
      {planet.residents.length > 0 && (
        <ResidentsContainer>
          <span>
            <ResidentIcon />
            <strong>{`Residents (${planet.residents.length}):`}</strong>
          </span>

          <div className="film-list">
            {planet.residents.map((resident) => (
              <p key={resident.name}>{resident.name}</p>
            ))}
          </div>
        </ResidentsContainer>
      )}
    </>
  );
};

export default Residents;
