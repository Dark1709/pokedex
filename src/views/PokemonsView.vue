<script setup>
import HeaderSearch from "../components/pokemons/HeaderSearch.vue";
import PokemonList from "../components/pokemons/PokemonList.vue";
import { getCharactersList } from "../services/pokemon.service";
import { ref, onMounted } from "vue";

const scrollContainer = ref(null);
const pokemonList = ref([]);
const pokemonIndex = ref(0);
let loading = false;

onMounted(async () => {
  await loadMore();
});

async function loadMore() {
  if (loading) return;

  loading = true;
  const newPokemons = await getCharactersList(pokemonIndex.value);
  pokemonList.value = pokemonList.value.concat(newPokemons);
  pokemonIndex.value++;
  loading = false;
}

function onScroll() {
  const container = scrollContainer.value;
  const scrollPosition = container.scrollTop + container.clientHeight;
  const totalHeight = container.scrollHeight;

  if (scrollPosition >= totalHeight) {
    loadMore();
  }
}

</script>

<template>
  <HeaderSearch />
  <div ref="scrollContainer" @scroll="onScroll" style="overflow-y: auto; height: 800px;">
    <PokemonList :pokemonList="pokemonList" />
  </div>
</template>
<style scoped></style>
