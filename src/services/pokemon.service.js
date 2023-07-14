import { BASE_URL, SPRITES, POKEMONS } from "../utils";
import { pokemonAdapter } from "./adapters";
import { API } from "../config/";

export async function getCharacterByName(name) {
  const externalPokemon = await API.GET(`${BASE_URL}/${name}`);
  return pokemonAdapter().toPokemonBussines(externalPokemon);
}

export async function getCharactersList() {
  try {
    const response = await API.GET(POKEMONS);
    return response.results;
  } catch {
    throw new Error("Ha ocurrido un error al obtener los personajes");
  }
}

function getRandomId(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export async function getImage() {
  try {
    let id = getRandomId(1, 898);
    const data = await API.GET(`${BASE_URL}/${id}`);

    return [
      data.name,
      data.sprites.other.dream_world.front_default
        ? data.sprites.other.dream_world.front_default
        : SPRITES.replace("id", `${id}`),
    ];
  } catch (error) {
    throw new Error("Ha ocurrido un error al obtener la imagen");
  }
}
