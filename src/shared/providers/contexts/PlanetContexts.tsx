import { IPlanet } from "@/shared/types";
import { ReactNode, createContext, useState } from "react";

export type PlanetContextData = {
  children: ReactNode;
};

export type PlanetContextProps = {
  planet: IPlanet;
  setPlanet: (planet: IPlanet) => void;
};

const PlanetContext = createContext({} as PlanetContextProps);

export function PlanetContextProvider({ children }: PlanetContextData) {
  const [planet, setPlanet] = useState<IPlanet>({} as IPlanet);

  return (
    <PlanetContext.Provider value={{ planet, setPlanet }}>
      {children}
    </PlanetContext.Provider>
  );
}

export default PlanetContext;
