import { ReactNode, createContext, useState } from "react";

export type FilterContextData = {
  children: ReactNode;
};

export type FilterContextProps = {
  nameFilterOrder: string;
  populationFilterOrder: string;
  handleSelectNameFilter: (order: string) => void;
  handleSelectPopulationFilter: (order: string) => void;
  handleCleanAllFilters: () => void;
};

const FilterContext = createContext({} as FilterContextProps);

export function FilterContextProvider({ children }: FilterContextData) {
  const [nameFilterOrder, setNameFilterOrder] = useState<string>("Name");
  const [populationFilterOrder, setPopulationFilterOrder] =
    useState<string>("Population");

  function handleSelectNameFilter(order: string) {
    setNameFilterOrder(order);
    setPopulationFilterOrder("Population");
  }

  function handleSelectPopulationFilter(order: string) {
    setPopulationFilterOrder(order);
    setNameFilterOrder("Name");
  }

  function handleCleanAllFilters() {
    setNameFilterOrder("Name");
    setPopulationFilterOrder("Population");
  }

  return (
    <FilterContext.Provider
      value={{
        nameFilterOrder,
        populationFilterOrder,
        handleSelectNameFilter,
        handleSelectPopulationFilter,
        handleCleanAllFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
