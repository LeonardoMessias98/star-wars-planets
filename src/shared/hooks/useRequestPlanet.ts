import { useState } from "react";
import { IPlanet } from "../types";

const useRequestPlanet = () => {
  const [search, setSearch] = useState<string>('');
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchPlanets() {
    const searchIsNotANumber = Number.isNaN(Number(search));

    const requestSearch = searchIsNotANumber ? search : '';

    const response = await fetch(
      `https://swapi.dev/api/planets/?search=${requestSearch}`,
      { cache: "force-cache" }
    );

    return await response.json();
  }

  async function requestPlanets() {
    setIsLoading(true);
    const data = await fetchPlanets();

    setPlanets(data.results);
    setIsLoading(false);
  }

  return {
    search,
    planets,
    isLoading,
    setSearch,
    requestPlanets
  }
}

export default useRequestPlanet
