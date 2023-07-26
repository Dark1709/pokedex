export function pokemonFactory(pokemon) {
  return {
    id: String(pokemon.id) || "",
    name: pokemon.name || "",
    types:
      pokemon.types?.map((type) => {
        return {
          name: type.type.name,
        };
      }) || [],
    height: String(pokemon.height) || "",
    weight: String(pokemon.weight) || "",
    baseExperience: String(pokemon.base_experience) || "",
    stats:
      pokemon.stats?.map((stat) => {
        return {
          name: stat.stat.name,
          value: stat.base_stat,
        };
      }) || [],
    abilities: pokemon.abilities?.map((ability) => ability.ability.name) || [],
    /*     species:
      pokemon.species?.map((specie) => {
        return {
          name: specie.name,
          url: `https://pokeapi.co/api/v2/${specie}`,
        };
      }) || [], */
  };
}

export function pokemonImageFactory(pokemon) {
  return {
    id: pokemon.id || "",
    name: pokemon.name || "",
    image: pokemon.sprites.other["official-artwork"].front_default,
  };
}
