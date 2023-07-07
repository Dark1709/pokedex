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
    <Popper :content="pokemonName" hover>
      <picture class="pokemon-image">
        <img :src="pokemonImage" alt="pokemonImage" />
      </picture>
    </Popper>
  </section>
</template>

<style scoped>
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

@media screen and (max-width: 1400px) {

  .pokemon-container {
    background: none;
    position: fixed;
  }


  .pokemon-image img {
    max-width: none;
    position: relative;
    top:25rem;
    padding: 0 4rem;
  }

}

</style>
