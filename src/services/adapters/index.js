import { pokemonFactory, pokemonImageFactory } from "../../models";

export function pokemonAdapter() {
  function toPokemonBussines(externalPokemon) {
    return pokemonFactory(externalPokemon);
  }

  return {
    toPokemonBussines,
  };
}

export function pokemonImageAdapter() {
  function toPokemonImageBussines(externalPokemon) {
    return pokemonImageFactory(externalPokemon);
  }

  return {
    toPokemonImageBussines,
  };
}
