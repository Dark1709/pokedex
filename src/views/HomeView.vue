<script setup>
import SearchPokemon from "../components/SearchPokemon.vue";
import RandomPokemon from "../components/RandomPokemon.vue";
</script>

<template>
  <main class="main-container">
    <SearchPokemon />
    <RandomPokemon />
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  padding: 5% 10%;
  justify-content: center;
}
</style>
