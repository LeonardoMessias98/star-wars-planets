import SinglePlanetModule from "@/modules/SinglePlanet";
import { IPlanet } from "@/shared/types";
import { GetStaticPropsContext } from "next";

interface IPlanetPage {
  planet: IPlanet;
}

export default function Planet({ planet }: IPlanetPage) {
  return (
    <>
      <SinglePlanetModule planet={planet} />
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const params = ctx.params;
  const id = Number(params?.id);

  async function getSinglePlanet(id: number) {
    const response = await fetch(`https://swapi.dev/api/planets/${id}/`, {
      cache: "force-cache",
    });

    return response.json();
  }

  const planet = await getSinglePlanet(id);

  return {
    props: {
      planet,
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
