const BASE_URL = import.meta.env.VITE_BASE_URL;

export const API = `${BASE_URL}pokemon`;
export const SPECIES = `${BASE_URL}pokemon-species/`;
export const POKEMONS = `${BASE_URL}pokemon?limit=20&offset=0`;

export const SPRITES =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png";
