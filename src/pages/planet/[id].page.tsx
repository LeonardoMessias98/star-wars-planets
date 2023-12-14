import SinglePlanetModule from "@/modules/SinglePlanet";
import { IPlanet } from "@/shared/types";
import getPlanetImageUrl from "@/shared/utils/getPlanetImageUrl";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

interface IPlanetPage {
  planet: IPlanet;
  id: string;
}

export default function Planet({ planet, id }: IPlanetPage) {
  const meta_title = `Star Wars - Planet ${planet.name}`;
  const meta_description = `${planet.name} is a planet with ${planet.population} population, its climate is ${planet.climate} and its terrain is ${planet.terrain}`;

  return (
    <>
      <Head>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />

        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />

        <meta
          property="og:url"
          content={`https://planets-starwars.vercel.app/planet/${id}`}
        />

        <meta property="og:image" content={getPlanetImageUrl(planet.name)} />
        <meta property="og:type" content="website" />
      </Head>

      <SinglePlanetModule planet={planet} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const params = ctx.params;
  const id = Number(params?.id);

  async function getSinglePlanet(id: number) {
    const response = await fetch(
      `https://planets-starwars.vercel.app/api/planet/${id}/`,
      {
        cache: "force-cache",
      }
    );

    const data = await response.json();

    return JSON.parse(data.message);
  }

  const planet = await getSinglePlanet(id);

  return {
    props: {
      planet: planet,
      id: id,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
