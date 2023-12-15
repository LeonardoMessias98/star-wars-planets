import React from "react";

import { IPlanet } from "@/shared/types";
import MoviesIcon from "@/shared/assets/MoviesIcon";
import { FilmsContainer } from "./styles";

interface IFilms {
  planet: IPlanet;
}

const Films = ({ planet }: IFilms) => {
  return (
    <>
      {planet.films.length > 0 && (
        <FilmsContainer>
          <span>
            <MoviesIcon />
            <strong>{`Films (${planet.films.length}):`}</strong>
          </span>

          <div className="film-list">
            {planet.films.map((film) => (
              <p key={film.title}>{film.title}</p>
            ))}
          </div>
        </FilmsContainer>
      )}
    </>
  );
};

export default Films;
