<script setup>
import { defineProps, ref, onMounted } from "vue";
import PokemonType from "../common/PokemonType.vue";
import { getCharacterByName } from "../../services/pokemon.service";
import { toBackgroundColor } from "../../utils";

const props = defineProps(["id", "image", "name"]);

const pokemonTypes = ref([]);

onMounted(async () => {
  try {
    const pokemon = await getCharacterByName(props.name);
    pokemonTypes.value = pokemon.types;
  } catch {
    throw new Error("Ha ocurrido un error al obtener el Pokémon");
  }
});

</script>

<template>
    <div class="pokemon-card" :style="toBackgroundColor(pokemonTypes)">
    <section class="header-card">
      <p class="id">#{{ id }}</p>
      <div class="types" >
          <PokemonType v-for="type in pokemonTypes" :key="type.name" :typeName="type.name" />
      </div>
    </section>
    <section class="detail-pokemon">
      <picture>
        <img class="pokemonImage" :src="image" alt="image" />
      </picture>
      <h3>{{ name.toUpperCase() }}</h3>
    </section>
  </div>
</template>

<style scoped>
.pokemon-card {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
}

.header-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem 0 1rem;
}

.id {
  font-size: 2.2rem;
  font-weight: bold;
  color: black;
}

.pokemon-type{
    margin: 0.4rem;
    max-width: 2.5rem;
    max-height: 2.5rem;
  }


.detail-pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pokemonImage {
  max-height: 200px;
  max-width: 200px;
}

h3 {
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
}

.detail-pokemon img:hover {
  padding: 0.1rem;
}

</style>
