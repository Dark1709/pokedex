<script setup>
import { defineProps } from "vue";
import PokemonItem from "./PokemonItem.vue";
import ButtonLoadMore from "./ButtonLoadMore.vue";
import { SPRITES } from "../../utils";

defineProps(["pokemonList"]);

function getId(url) {
  const urlSplit = url.split("/");
  return urlSplit[urlSplit.length - 2];
}

function buildImage(id) {
  return SPRITES.replace("{id}", id);
}
</script>

<template>
  <div class="container">
    <section class="card-container">
      <PokemonItem
        v-for="pokemon in pokemonList"
        :key="getId(pokemon.url)"
        :id="getId(pokemon.url)"
        :image="buildImage(getId(pokemon.url))"
        :name="pokemon.name"
      />
    </section>
    <section class="container-button">
      <ButtonLoadMore />
    </section>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--medium-background);
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 15rem;
}

.container-button {
  display: flex;
  justify-content: end;
  padding: 1rem 15rem;
}
</style>
