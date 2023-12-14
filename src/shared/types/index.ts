export interface IPlanet {
  name: IPlanetName;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export type IPlanetName =
  | "tatooine"
  | "naboo"
  | "mustafar"
  | "kashyyyk"
  | "hoth"
  | "endor"
  | "dagobah"
  | "coruscant"
  | "bespin"
  | "alderaan";
