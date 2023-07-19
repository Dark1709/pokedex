<script setup>
import { ref } from 'vue';

const searchPokemon = ref("")

</script>

<template>
  <div class="search-bar">
    <span class="input-icon"><i class="bx bx-search-alt-2"></i></span>
    <input
      v-model="searchPokemon"
      type="text"
      placeholder="Enter the name or id of the Pokemon(1-898)..."
    />
  </div>
</template>

<style scoped>
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
