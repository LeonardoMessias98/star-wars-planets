import React from "react";

import MoviesIcon from "@/shared/assets/MoviesIcon";
import { FilmsContainer } from "./styles";
import { IPlanet } from "@/shared/types";

interface IFilms {
  planet: IPlanet;
}

const Films = ({ planet }: IFilms) => {
  return (
    <FilmsContainer>
      <span>
        <MoviesIcon />
        <strong>Films:</strong>
      </span>

      <div className="film-list">
        {planet.films.map((film) => (
          <p key={film.title}>{film.title}</p>
        ))}
      </div>
    </FilmsContainer>
  );
};

export default Films;
