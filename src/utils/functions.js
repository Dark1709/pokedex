import { types } from "../mocks/pokemon_types";

export const toIconType = (pokemonType) => {
  const type = types.find((type) => type.name === pokemonType);
  return type.image;
};

export const toTypeColor = (pokemonType) => {
  const type = types.find((type) => type.name === pokemonType);
  return type.bgColor;
};

export const toIconColor = (pokemonType) => {
  const type = types.find((type) => type.name === pokemonType);
  return type.typeColor;
};

export const toCapitalize = (sentence) => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

export function toBackgroundColor(pokemonTypes) {
  let backgroundColor = "none";
  if (pokemonTypes.length === 1) {
    const name = pokemonTypes[0].name;
    backgroundColor = toTypeColor(name);
  }
  let backgroundImage = "none";
  if (pokemonTypes.length > 1) {
    backgroundImage = `linear-gradient(to top, ${pokemonTypes
      .map((type) => toTypeColor(type.name))
      .join(", ")})`;
  }

  return {
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage,
  };
}


