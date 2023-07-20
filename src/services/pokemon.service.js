import { API, SPRITES, POKEMONS } from "../utils";

import { pokemonAdapter, pokemonImageAdapter } from "./adapters";
import { API_FETCH } from "../config/";

export function buildImage(id) {
  return SPRITES.replace("{id}", id);
}

export async function getCharacterByName(name) {
  const externalPokemon = await API_FETCH.GET(`${API}/${name}`);
  return pokemonAdapter().toPokemonBussines(externalPokemon);
}

export async function getCharactersList(offset = 0) {
  try {
    const response = await API_FETCH.GET(POKEMONS + offset);
    return response.results;
  } catch {
    throw new Error("Ha ocurrido un error al obtener los personajes");
  }
}

function getRandomId(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

async function getImageById(id) {
  const data = await API_FETCH.GET(`${API}/${id}`);
  return data;
}

export async function getRandomImage() {
  try {
    let id = getRandomId(1, 898);
    const data = await getImageById(id);

    const { name, image } = pokemonImageAdapter().toPokemonImageBussines(data);

    return [name, image ? image : buildImage(id)];
  } catch (error) {
    throw new Error("Ha ocurrido un error al obtener la imagen");
  }
}


