async function getPlanetData(id: string) {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/${id}/`, {
      cache: "force-cache",
    });
    const data = response.json();

    return data;
  } catch (error) {}
}

export default getPlanetData;
