import getFilmsPromise from "@/shared/utils/getFilmsPromise";
import getPlanetData from "@/shared/utils/getPlanetData";
import getResidentsPromise from "@/shared/utils/getResidentPromise";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    const planet = await getPlanetData(String(req?.query?.id));
    const residentsPromises = getResidentsPromise(planet.residents);
    const filmsPromises = getFilmsPromise(planet.films);

    const resolvedFilms = await Promise.all(filmsPromises);
    const resolvedResidents = await Promise.all(residentsPromises);

    const films = await Promise.all(resolvedFilms.map((film) => film.json()));
    const residents = await Promise.all(
      resolvedResidents.map((resident) => resident.json())
    );

    res
      .status(200)
      .json({ message: JSON.stringify({ ...planet, films, residents }) });
  } else {
    res.status(405).json({ message: "This method is not allowed!" });
  }
}
