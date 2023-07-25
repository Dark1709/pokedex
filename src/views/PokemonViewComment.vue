<!-- <script setup>
import HeaderSearch from "../components/pokemons/HeaderSearch.vue";
import PokemonList from "../components/pokemons/PokemonList.vue";
import { getCharactersList } from "../services/pokemon.service";
import { ref } from "vue";
import { vInfiniteScroll } from '@vueuse/components'

const currentGroupIndex = ref(0);
const pokemonList = ref([]);
const fetchingPokemonList = ref(false);
const hasMoreData = ref(true);

const getPokemons = async (groupIndex) => {

  fetchingPokemonList.value = true;
  const newPokemons = await getCharactersList(groupIndex);

  if (newPokemons.length === 0) {
    hasMoreData.value = false;
  } else {
    pokemonList.value = pokemonList.value.concat(newPokemons);
  }
  fetchingPokemonList.value = false;
  return newPokemons;

};

const onScrollToEnd = async () => {
  if (hasMoreData.value && !fetchingPokemonList.value) {
    await getPokemons(currentGroupIndex.value++);
  }
};

</script>

<template>
  <HeaderSearch />
  <ul v-infinite-scroll="[() => onScrollToEnd(), { 'distance' : 100 }]">
    <PokemonList :pokemonList="pokemonList" />
    <div v-if="fetchingPokemonList">Cargando...</div>
    <div v-if="!hasMoreData">No hay más datos para cargar.</div>
  </ul>
</template> -->