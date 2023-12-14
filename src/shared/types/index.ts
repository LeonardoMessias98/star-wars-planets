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
  residents: IResident[];
  films: IFilm[];
  created: string;
  edited: string;
  url: string;
}

export interface IFilm {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: string;
  opening_crawl: string;
  planets: IPlanet[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export interface IResident {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: IFilm[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}
