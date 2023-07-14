import { pokemonFactory } from "../../models";

export function pokemonAdapter() {
  function toPokemonBussines(externalPokemon) {
    return pokemonFactory(externalPokemon);
  }

  return {
    toPokemonBussines,
  };
}
