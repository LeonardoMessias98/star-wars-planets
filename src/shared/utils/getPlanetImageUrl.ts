import { IPlanetName } from "../types";

const getPlanetImageUrl = (planetName: IPlanetName) => {
  const name: IPlanetName = planetName.toLowerCase() as IPlanetName;

  const imagesId = {
    tatooine: "0000",
    naboo: "0001",
    mustafar: "0002",
    kashyyyk: "0003",
    hoth: "0004",
    endor: "0005",
    dagobah: "0006",
    coruscant: "0007",
    bespin: "0008",
    alderaan: "0009",
  };

  const hasImage = imagesId[name];
  if(!hasImage) return 'https://cdn-icons-png.flaticon.com/512/2363/2363876.png'

  return `https://cryptospro.com.br/planetas/planeta_${imagesId[name]}_${name}.png`;
};

export default getPlanetImageUrl;
