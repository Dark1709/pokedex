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
    }
</style>