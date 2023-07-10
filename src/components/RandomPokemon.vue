<script setup>
import Popper from "vue3-popper";
import { getImage } from "../services/pokemon.service";
import { ref, onMounted } from "vue";

const pokemonName = ref("");
const pokemonImage = ref("");

onMounted(async () => {
  try {
    const [name, imageUrl] = await getImage();
    pokemonName.value = name;
    pokemonImage.value = imageUrl;
  } catch {
    throw new Error("Ha ocurrido un error al obtener la imagen del Pokémon");
  }
});
</script>

<template>
  <section class="pokemon-container">
    <picture class="pokemon-image">
      <Popper arrow :content="pokemonName" hover placement="top">
        <img :src="pokemonImage" alt="pokemonImage" loading="lazy" />
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
