<script setup>
import Popper from "vue3-popper";
import { useRouter } from "vue-router";
import { useGetRandomPokemon } from "../composable/home/useGetRandomPokemon";
const router = useRouter();
const { pokemon } = useGetRandomPokemon()

function redirectToPokemonCard(pokemonName) {
  router.push({ name: "singlePokemon", params: { name: pokemonName } });
}

</script>

<template>
  <section class="pokemon-container"  @click="redirectToPokemonCard(pokemon.name, router)">
    <picture class="pokemon-image">
      <Popper arrow :content="pokemon.name" hover placement="top">
        <img :src="pokemon.image" alt="pokemonImage" loading="lazy" />
      </Popper>
    </picture>
  </section>
</template>

<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
.pokemon-container {
  background-color: var(--medium-background);
  border-radius: 1.5rem;
  min-width: 400px;
  max-width: 500px;
  height: 500px;
  margin-left: 13rem;
  position: relative;
  cursor: pointer;
}

.pokemon-image img {
  position: absolute;
  width: 25rem;
  top: 3rem;
  left: -8rem;
}

/* :deep(.popper) {
  background-color: var(--color-pop) !important;
  padding: 20px;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}

:deep(.popper #arrow::before) {
  background-color: var(--color-pop);
}

:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
  background-color: var(--color-pop);
} */

@media screen and (max-width: 1400px) {
  .pokemon-container {
    background: none;
    position: fixed;
  }

  .pokemon-image img {
    max-width: none;
    position: relative;
    top: 25rem;
    padding: 0 4rem;
  }
}
</style>
