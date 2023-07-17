<script setup>
import { ref } from "vue";
import FieldSearch from "./common/FieldSearch.vue";

const searchPokemon = ref("");

async function getPokemon() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${searchPokemon.value}`
  );
  const data = await response.json();
  console.log(data);
}
</script>

<template>
  <section class="search-container">
    <div class="title">
      <h2>WHO IS THAT POKEMON?</h2>
    </div>
    <div class="search">
      <p>
        Find your favorite Pokemon! It's as easy as typing in the name or number
        corresponding to the National Pokédex and you're done.
      </p>
      <FieldSearch />
    </div>
  </section>
</template>

<style scoped>
.search-container {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title h2 {
  font-size: 3rem;
  font-weight: 600;
  text-shadow: var(--color-pop) 2px 5px;
  line-height: 60px;
}

@media screen and (max-width: 1400px) {
  .search-container {
    width: 100%;
  }

  .title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .title h2 {
    font-size: 2.3rem;
    line-height: 3rem;
  }
}
</style>
