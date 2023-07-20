<script setup>
import {  defineProps } from "vue";
import { buildImage } from "../../services/pokemon.service";
import PokemonItem from "./PokemonItem.vue";
import ButtonLoadMore from "./ButtonLoadMore.vue";

defineProps(["pokemonList"]);
const emit = defineEmits(["loadMore"]);

function getId(url) {
  const urlSplit = url.split("/");
  return urlSplit[urlSplit.length - 2];
}

function loadMore() {
  emit("loadMore");
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
      <ButtonLoadMore @load-more="loadMore()" />
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
