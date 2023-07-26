<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { getSpeciesbyName, getEvolutionChain, buildImage } from '../../services/pokemon.service';

const props = defineProps({
  name: String | Number
});

const router = useRouter();
const evolutions = ref([]);
const evolutionUrl = ref("")
const speciesData = ref(null)

function redirectToPokemonCard(pokemonName) {
  router.push({ name: "singlePokemon", params: { name: pokemonName } });
}

onMounted(async () => {
  speciesData.value = await getSpeciesbyName(props.name);
  evolutionUrl.value = speciesData.value.evolution_chain?.url;
  const evolutionChainData = await getEvolutionChain(evolutionUrl.value);
  evolutions.value = getEvolutions(evolutionChainData);
});

function getEvolutions(evolutionData) {
  const getEvolutionsArray = [];

  function browsePokemonList(evolutionChain) {
    const id = evolutionChain.species?.url?.split("/")[6];
    getEvolutionsArray.push({
      pokemonName: evolutionChain.species?.name,
      image: buildImage(id)
    });

    evolutionChain.evolves_to.forEach(evolution => {
      browsePokemonList(evolution);
    });
  }

  browsePokemonList(evolutionData.chain);
  return getEvolutionsArray;
}

</script>

<template>
  <div class="container">
    <div class="pokemon-evolutions">
      <header>
        <h3 class="evolution-subtitle">Evolutions</h3>
      </header>
      <div class="evolutions-container">
        <template v-for="evolution in evolutions" :key="evolution.pokemonName">
          <button
          class="pokemon-evolution-single" 
          @click="redirectToPokemonCard(evolution.pokemonName)"
          >
            <div class="pokemon-evolution-container">
              <picture class="pokemon-evolutions-image">
                <img :src="evolution.image" :alt="evolution.pokemonName" />
              </picture>
              <p>{{ evolution.pokemonName }}</p>
            </div>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

  <style scoped>

  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 2rem;
  }
  .pokemon-evolutions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px var(--color-pop);
    border-radius: 0.5rem;
    width: 100%;
    }

  .evolution-subtitle {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
  }
  
  .evolutions-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pokemon-evolutions-image img{
    width: 100px;
  }

  .pokemon-evolution-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:1rem;
  }

  .pokemon-evolution-container p{
    font-size: 1rem;
    font-weight: 400;
  }
  
  </style>