<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { getCharacterByName } from "../services/pokemon.service";
import PokemonHeader from "../components/pokemonDetail/PokemonHeader.vue";
import PokemonCard from "../components/pokemonDetail/PokemonCard.vue";

const pokemonId = ref('');
const pokemonName = ref('');
const pokemonImage = ref('');
const pokemonTypes = ref([]);
const pokemonHeight = ref('');
const pokemonWeight = ref('');
const pokemonBaseExperience = ref('');
const pokemonAbilities = ref([]);
const pokemonStats = ref([]);

const route = getCurrentInstance().proxy.$route;

onMounted(async () => {
  try {
    const pokemon = await getCharacterByName(route.params.name);
    pokemonId.value = pokemon.id;
    pokemonName.value = pokemon.name;
    pokemonImage.value = pokemon.image;
    pokemonTypes.value = pokemon.types;
    pokemonHeight.value = pokemon.height;
    pokemonWeight.value = pokemon.weight;
    pokemonBaseExperience.value = pokemon.baseExperience;
    pokemonAbilities.value = pokemon.abilities;
    pokemonStats.value = pokemon.stats;
  } catch {
    throw new Error('Ha ocurrido un error al obtener el Pokémon');
  }
});
</script>

<template>
    <div class="pokemon-view">
        <PokemonHeader :pokemonId="pokemonId" :pokemonName="pokemonName" />
        <PokemonCard
        :pokemonImage="pokemonImage"
        :pokemonTypes="pokemonTypes"
        :pokemonHeight="pokemonHeight"
        :pokemonWeight="pokemonWeight"
        :pokemonBaseExperience="pokemonBaseExperience"
        :pokemonAbilities="pokemonAbilities"
        :pokemonStats="pokemonStats"
        />
    </div>
</template>


<style scoped>

    .pokemon-view{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding:5rem 20rem ;
    }


</style>