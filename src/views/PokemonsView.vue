<script setup>
import HeaderSearch from "../components/pokemons/HeaderSearch.vue";
import PokemonList from "../components/pokemons/PokemonList.vue";
import { getCharactersList } from "../services/pokemon.service";
import { ref, onMounted } from "vue";

const pokemonList = ref([]);

onMounted(async () => {
  pokemonList.value = await getCharactersList();
  console.log(pokemonList.value);
});
</script>

<template>
  <HeaderSearch />
  <PokemonList :pokemonList="pokemonList" />
</template>

<style scoped></style>
