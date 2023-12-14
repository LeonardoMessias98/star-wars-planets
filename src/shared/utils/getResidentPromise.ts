function getResidentsPromise(urls: string[]) {
  let residents = [];

  try {
    for (let url of urls) {
      const response = fetch(url, { cache: "force-cache" });

      residents.push(response);
    }

    return residents;
  } catch (error) {
    return [];
  }
}

export default getResidentsPromise;
