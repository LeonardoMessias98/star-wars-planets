import React, { cache, useEffect, useState } from "react";

import MoviesIcon from "@/shared/assets/MoviesIcon";
import { FilmsContainer } from "./styles";
import { IPlanet } from "@/shared/types";

interface IFilm {
  film: string;
}

interface IFilms {
  planet: IPlanet;
}

const SingleFilm = ({ film }: IFilm) => {
  const [filmData, setFilmData] = useState<any>(null);

  useEffect(() => {
    async function getFilmData(url: string) {
      const response = await fetch(url, { cache: "force-cache" });
      setFilmData(await response.json());
    }

    getFilmData(film);
  }, [film]);

  return <p>{filmData?.title || ""}</p>;
};

const Films = ({ planet }: IFilms) => {
  return (
    <FilmsContainer>
      <span>
        <MoviesIcon />
        <strong>Films:</strong>
      </span>

      <div className="film-list">
        {planet.films.map((film) => (
          <SingleFilm film={film} />
        ))}
      </div>
    </FilmsContainer>
  );
};

export default Films;
