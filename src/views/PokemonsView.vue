<script setup>
import HeaderSearch from "../components/pokemons/HeaderSearch.vue";
import PokemonList from "../components/pokemons/PokemonList.vue";
import { getCharactersList } from "../services/pokemon.service";
import { ref, onMounted } from "vue";

const pokemonList = ref([]);
const offset = ref(0);

onMounted(async () => {
  pokemonList.value = await getCharactersList();
  console.log(pokemonList.value);
});

async function loadMore() {
  offset.value += 20;
  const lastPokemon = pokemonList.value;
  const newPokemons = await getCharactersList(offset.value);
  pokemonList.value = lastPokemon.concat(newPokemons);
}
</script>

<template>
  <HeaderSearch />
  <PokemonList :pokemonList="pokemonList" @load-more="loadMore()" />
</template>

<style scoped></style>
