export function pokemonFactory(pokemon) {
  return {
    id: pokemon.id || "",
    name: pokemon.name || "",
    types:
      pokemon.types?.map((type) => {
        return {
          name: type.type.name,
        };
      }) || [],
    height: pokemon.height || "",
    weight: pokemon.weight || "",
    baseExperience: pokemon.base_experience || 0,
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
