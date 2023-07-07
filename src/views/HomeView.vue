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
  padding: 10%;
  justify-content: center;
}

@media (min-device-width: 320px) and (max-width: 400px) {
  .main-container {
    padding: 2%;
    flex-direction: column;
  }
}
</style>
