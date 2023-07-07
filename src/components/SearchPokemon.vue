<script setup>
import { ref } from "vue";

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
      <div class="search-bar">
        <span class="input-icon"><i class="bx bx-search-alt-2"></i></span>
        <input
          v-model="searchPokemon"
          type="text"
          placeholder="Enter the name or id of the Pokemon(1-898)..."
        />
        <button @click="getPokemon()">text</button>
      </div>
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

.search-bar {
  background-color: var(--medium-background);
  display: flex;
  height: 3rem;
  border-radius: 10px;
  padding: 0 0.5rem;
  align-items: center;
}

.search p {
  margin-bottom: 4rem;
}

.search-bar input {
  background: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0 1rem;
}

.bx-search-alt-2 {
  color: var(--color-pop);
  font-size: 1rem;
}
</style>
