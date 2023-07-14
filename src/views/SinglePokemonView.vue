<script setup>
import { ref, onMounted } from 'vue';
import { getCharacterByName } from "../services/pokemon.service";

const pokemonId = ref('');
const pokemonName = ref('');
const pokemonImage = ref('');
const pokemonTypes = ref([]);
const pokemonHeight = ref('');
const pokemonWeight = ref('');
const pokemonBaseExperience = ref('');
const pokemonAbilities = ref([]);
const pokemonStats =  ref([]);

onMounted(async () => {
    try {
        const pokemon = await getCharacterByName('pikachu');
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
        throw new Error('Ha ocurrido un error al obtener la imagen del Pokémon');
    }
});

</script>

<template>
    <div class="pokemon-view">
        <header class="header-card">
            <h2 class="pokemon-id"># {{ pokemonId }}</h2>
            <h2 class="pokemon-name">{{ pokemonName.toUpperCase() }}</h2>
        </header>

        <article class="card">
            <section class="pokemon-picture">
                <picture>
                    <img :src="pokemonImage" :alt="pokemonName"> 
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
                        <h3>Base experience</h3>
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
                            <li v-for="(stat, name) in pokemonStats" :key="name">{{ stat.name }}: {{ stat.value }}</li>
                        </ul>
                    </div>
                </div>
                <div class="pokemon-evolutions">
                    <header>
                        <h3>Evolution</h3>
                    </header>
                    <div class="pokemon-evolutions-container">
                        <div class="pokemon-evolution-single">
                            <picture>
                                <img src="" alt="Charmander">
                            </picture>
                            <p>Charmander</p>
                        </div>
                        <div class="pokemon-evolution-single">
                            <picture>
                                <img src="" alt="Charmeleon">
                            </picture>
                            <p>Charmeleon</p>
                        </div>
                        <div class="pokemon-evolution-single">
                            <picture>
                                <img src="" alt="Charizard">
                            </picture>
                            <p>Charizard</p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
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


    .header-card{
        display: flex;
        width: 100%;
    }

    .card{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .pokemon-picture{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .pokemon-detail{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .pokemon-information{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .pokemon-information-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100px;
    }

    .pokemon-evolutions{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .pokemon-evolutions-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>