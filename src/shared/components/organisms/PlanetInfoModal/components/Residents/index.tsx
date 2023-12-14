import React, { useEffect, useState } from "react";

import ResidentIcon from "@/shared/assets/ResidentIcon";
import { IPlanet } from "@/shared/types";
import { ResidentsContainer } from "./styles";

interface IResident {
  resident: string;
}

interface IResidents {
  planet: IPlanet;
}

const SingleResident = ({ resident }: IResident) => {
  const [residentData, setResidentData] = useState<any>(null);

  useEffect(() => {
    async function getResidentData(url: string) {
      const response = await fetch(url, { cache: "force-cache" });
      setResidentData(await response.json());
    }

    getResidentData(resident);
  }, [resident]);

  return <p>{residentData?.name || ""}</p>;
};

const Residents = ({ planet }: IResidents) => {
  console.log(planet.residents);
  return (
    <ResidentsContainer>
      <span>
        <ResidentIcon />
        <strong>Residents:</strong>
      </span>

      <div className="film-list">
        {planet.residents.map((resident) => (
          <SingleResident resident={resident} />
        ))}
      </div>
    </ResidentsContainer>
  );
};

export default Residents;
