<script setup>
import { defineProps } from 'vue';
import PokemonEvolutions from './PokemonEvolutions.vue';
import {types} from '../../mocks/pokemon_types'
import Popper from "vue3-popper";
import { SPRITES } from "../../utils";

const props = defineProps({

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
  pokemonId: {
    type: String,
    required: true,
  },
});

const toIconType = (pokemonType) => {
  const type = types.find((type) => type.name === pokemonType);
  return type.image;
}

const toTypeColor = (pokemonType) => {
  const type = types.find((type) => type.name === pokemonType);
  return type.bgColor;
}

const toIconColor = (pokemonType) => {
  const type = types.find((type) => type.name === pokemonType);
  return type.typeColor;
}

function capitalize(sentence){
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

function buildImage(id) {
  return SPRITES.replace("{id}", id);
}

</script>
          
<template>
    <article class="card">
      <section class="pokemon-picture" :style="{
        backgroundColor: pokemonTypes.length === 1 ? toTypeColor(pokemonTypes[0].name) : 'none',
        backgroundImage: pokemonTypes.length > 1 ? `linear-gradient(to top, ${pokemonTypes.map(type => toTypeColor(type.name)).join(', ')})` : 'none'
      }">
        <picture>
          <img :src="buildImage(pokemonId)" />
        </picture>
        <div class="types" >
          <button v-for="type in pokemonTypes" :key="type.name" class="pokemon-type" :style="{ backgroundColor: toIconColor(type.name) }">
            <Popper arrow :content="type.name" hover placement="bottom">
              <img :src="toIconType(type.name)" :alt="type.name"/>
            </Popper>
          </button>
        </div>
      </section>
      <section class="pokemon-detail">
        <div class="pokemon-information">
          <div class="pokemon-information-container">
            <h3>Height</h3>
            <h4>{{ pokemonHeight }} m</h4>
          </div>
          <div class="pokemon-information-container">
            <h3>Weight</h3>
            <h4>{{ pokemonWeight }} kg</h4>
          </div>
          <div class="pokemon-information-container">
            <h3>Base Experience</h3>
            <h4>{{ pokemonBaseExperience }}</h4>
          </div>
          <div class="pokemon-information-container">
            <h3>Abilities</h3>
            <ul>
              <li v-for="ability in pokemonAbilities" :key="ability">{{ capitalize(ability) }}</li>
            </ul>
          </div>
          <div class="pokemon-information-container" id="stats">
            <h3>Stats</h3>
            <select>
              <option v-for="(stat, name) in pokemonStats" :key="name">
                {{ capitalize(stat.name) }}: {{ stat.value }}
              </option>
            </select>
          </div>
        </div>
        <pokemon-evolutions/>
      </section>
    </article>
  </template>
  
  
  <style scoped>
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  .pokemon-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    border-radius: 2rem;
    margin-right: 2rem;
  }

  .pokemon-picture picture{
    width: 100%;
    min-width: 25rem;
    display: flex;
    justify-content: center;
  }

  .pokemon-picture picture img{
    height: 100%;
    max-height: 25rem;
    min-height: 20rem;
  }
  
  .pokemon-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-color: var(--medium-background);
    border-radius: 2rem;
  }
  
  .pokemon-information {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
    gap: 1rem;
  }
  
  .pokemon-information-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px var(--color-pop);
    border-radius: 0.5rem;
    padding: 1rem;
    height: 100%;
  }

  .pokemon-information-container h3{
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    width: 100%;
    text-align: center;
  }

  #stats{
    grid-column: span 2;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: solid 1px var(--color-pop);
    background: none;
  }

  #stats select{
    width: 80%;
    border: none;
    background: none;
    text-align: center;
  }

  #stats select option{
    width: 100%;
    border: none;
    background: var(--medium-background);
    text-align: center;
  }

  .pokemon-type{
    border-radius: 50%;
    margin: 1rem;
    max-width: 3rem;
    max-height: 3rem;
    padding: 4%;
  }

  </style>
  