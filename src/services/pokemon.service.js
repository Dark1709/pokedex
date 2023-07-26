import { API, SPRITES, POKEMONS, SPECIES, EVOLUTIONS } from "../utils";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { pokemonAdapter, pokemonImageAdapter } from "./adapters";
import { API_FETCH } from "../config/";

export function buildImage(id) {
  return SPRITES.replace("{id}", id);
}

export async function getCharacterByName(name) {
  try {
    const externalPokemon = await API_FETCH.GET(`${API}/${name}`);
    return pokemonAdapter().toPokemonBussines(externalPokemon);
  } catch (error) {
    return null;
  }
}

const pokemonToShow = 10;

export async function getCharactersList(groupIndex = 0) {
  try {
    const offset = groupIndex * pokemonToShow;
    const response = await API_FETCH.GET(
      `${BASE_URL}pokemon?limit=${pokemonToShow}&offset=${offset}`
    );
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

    return [name, image];
  } catch (error) {
    throw new Error("Ha ocurrido un error al obtener la imagen");
  }
}

export function getId(url) {
  const urlSplit = url.split("/");
  return urlSplit[urlSplit.length - 2];
}

export async function getSpeciesbyName(name) {
  const response = await API_FETCH.GET(`${SPECIES}/${name}`);
  return response;
}

export async function getEvolutionChain(url) {
  const response = await API_FETCH.GET(url);
  return response;
}
