<script setup>
import { defineProps } from 'vue';
import PokemonEvolutions from './PokemonEvolutions.vue';

const props = defineProps({
  pokemonImage: {
    type: String,
    required: true,
  },
  pokemonTypes: {
    type: Array,
    required: true,
  },
  pokemonHeight: {
    type: String,
    required: true,
  },
  pokemonWeight: {
    type: String,
    required: true,
  },
  pokemonBaseExperience: {
    type: String,
    required: true,
  },
  pokemonAbilities: {
    type: Array,
    required: true,
  },
  pokemonStats: {
    type: Array,
    required: true,
  },
});
</script>
          
<template>
    <article class="card">
      <section class="pokemon-picture">
        <picture>
          <img :src="pokemonImage" :alt="pokemonName" />
        </picture>
        <div class="pokemon-type">
          <button v-for="type in pokemonTypes" :key="type">{{ type.name }}</button>
        </div>
      </section>
      <section class="pokemon-detail">
        <div class="pokemon-information">
          <div class="pokemon-information-container">
            <h3>Height</h3>
            <p>{{ pokemonHeight }} m</p>
          </div>
          <div class="pokemon-information-container">
            <h3>Weight</h3>
            <p>{{ pokemonWeight }} kg</p>
          </div>
          <div class="pokemon-information-container">
            <h3>Base Experience</h3>
            <p>{{ pokemonBaseExperience }}</p>
          </div>
          <div class="pokemon-information-container">
            <h3>Abilities</h3>
            <ul>
              <li v-for="ability in pokemonAbilities" :key="ability">{{ ability }}</li>
            </ul>
          </div>
          <div class="pokemon-information-container">
            <h3>Stats</h3>
            <ul>
              <li v-for="(stat, name) in pokemonStats" :key="name">
                {{ stat.name }}: {{ stat.value }}
              </li>
            </ul>
          </div>
        </div>
        <pokemon-evolutions/>
      </section>
    </article>
  </template>
  
  
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .pokemon-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .pokemon-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .pokemon-information {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  
  .pokemon-information-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
  </style>
  