export function pokemonFactory(pokemon) {
  return {
    id: pokemon.id || "",
    name: pokemon.name || "",
    image: pokemon.sprites?.other?.dream_world?.front_default || "",
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
  };
}
