<script setup>
import { getImage } from '../services/pokemon.service'
import { ref, onMounted } from 'vue';

const pokemonImage = ref('');

onMounted(async () => {
  try {
    const [,imageUrl] = await getImage();
    pokemonImage.value = imageUrl;
  } catch {
    throw new Error('Ha ocurrido un error al obtener la imagen del Pokémon');
  }
});

</script>

<template>
    <section class="pokemon-container">
        <picture class="pokemon-image">
            <img :src="pokemonImage" alt="pokemonImage" />
        </picture>
    </section>
</template>

<style scoped>

.pokemon-container {
    background-color: var(--medium-background);
    border-radius: 1.5rem;
    width: 500px;
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

</style>