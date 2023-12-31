const convertToPageUrl = (url: string) => {
  const planetId = url
    .replace("https://swapi.dev/api/planets/", "")
    .replace("/", "");

  return `/planet/${planetId}`;
};

export default convertToPageUrl;
