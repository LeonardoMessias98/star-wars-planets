import HomeModule from "@/modules/Home";
import Head from "next/head";

export default function Home() {
  const meta_title = "Star Wars Planets";
  const meta_description =
    "Explore the Star Wars galaxy and discover fascinating information about the planets. Find intriguing details such as climate, terrain, and inhabitants of each planet. An intergalactic journey awaits you on our website. May the Force be with you!";

  return (
    <>
      <Head>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />

        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />

        <meta
          property="og:url"
          content={"https://planets-starwars.vercel.app"}
        />

        <meta
          property="og:image"
          content={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
          }
        />
      </Head>

      <HomeModule />
    </>
  );
}
