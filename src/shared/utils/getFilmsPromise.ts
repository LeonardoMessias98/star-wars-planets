function getFilmsPromise(urls: string[]) {
  let films = [];

  try {
    for (let url of urls) {
      const promise = fetch(url, { cache: "force-cache" });

      films.push(promise);
    }

    return films;
  } catch (error) {
    return [];
  }
}

export default getFilmsPromise;
