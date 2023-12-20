import { useContext, useState } from 'react'


import FilterContext from "@/shared/providers/contexts/FilterContexts";
import { IPlanet } from '../types';

const useFilterResults = () => {
  const [population, setPopulation] = useState(0);
  const { nameFilterOrder, populationFilterOrder } = useContext(FilterContext);

  function orderByName(order: string, results: IPlanet[]) {
    if (order === "Ascendent")
      return results.sort((a, b) => (a.name > b.name ? 1 : -1));

    if (order === "Decrescent")
      return results.sort((a, b) => (a.name < b.name ? 1 : -1));

    return results
  }

  function filterByPopulation(filter: string, results: IPlanet[]) {
    if (filter === "Equal")
      return results.filter(result => Number(result.population) === population);

    if (filter === "Greater")
      return results.filter(result => Number(result.population) > population);

    if (filter === "Less")
      return results.filter(result => Number(result.population) < population);

    return results
  }

  function orderResults(results: IPlanet[]): IPlanet[] {
    console.log({ results, nameFilterOrder, populationFilterOrder })

    if (nameFilterOrder !== 'Name') {
      return orderByName(nameFilterOrder, results)
    }

    if (populationFilterOrder !== 'Population') {
      return filterByPopulation(populationFilterOrder, results)
    }

    return results;
  }

  return { orderResults, setPopulation }
}

export default useFilterResults
