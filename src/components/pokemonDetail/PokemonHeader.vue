<script setup>
import { defineProps } from 'vue';

const props = defineProps({
pokemonId: {
    type: String,
    required: true,
},
pokemonName: {
    type: String,
    required: true,
},
});
</script>
  

<template>
    <header class="header-card">
        <h2 class="pokemon-id"># {{ pokemonId }}</h2>
        <h2 class="pokemon-name">{{ pokemonName.toUpperCase() }}</h2>
    </header>
</template>

<style scoped>
    .header-card {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    }

    .header-card h2 {
    font-size: 1.8rem;
    font-weight: 600;
    text-shadow: var(--color-pop) 2px 5px;
    line-height: 60px;
    }

    .pokemon-id {
    margin-right: 2rem;
    }

</style>