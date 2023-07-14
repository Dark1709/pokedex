import { ref } from 'vue';
import { API, SPRITES, POKEMONS } from "../utils";

export async function getCharacterById(id) {
  try {
    let url = API.replace("{id}", `${id}`);
    const response = await fetch(url);
    const data = await response.json();

    return [
      data.name,
      data.id,
      data.types[0].type.name,
      SPRITES.replace("id", `${data.id}`),
    ];
  } catch {
    throw new Error("Ha ocurrido un error al obtener los personajes");
  }
}

export async function getCharactersList() {
  try {
    const response = await fetch(POKEMONS);
    const data = await response.json();

    return data.results;
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
    let url = API.replace("{id}", `${id}`);
    const response = await fetch(url);
    const data = await response.json();

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
