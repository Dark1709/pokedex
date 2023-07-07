<script setup>
import HeaderApp from "../components/HeaderApp.vue";
import SearchPokemon from "../components/SearchPokemon.vue";
import RandomPokemon from "../components/RandomPokemon.vue";
</script>

<template>
  <header class="header">
    <HeaderApp />
  </header>

  <main class="main-container">
    <SearchPokemon />
    <RandomPokemon />
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10%;
  justify-content: center;
}

</style>
