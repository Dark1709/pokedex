<script setup>
import IconType from "./IconType.vue";
import { defineProps } from "vue";

defineProps(["id", "image", "name"]);

/* "types" preguntar sobre esto */

function nameUpperCase(name) {
  return name.toUpperCase();
}
</script>

<template>
  <div class="pokemon-card">
    <section class="header-card">
      <p class="id">#{{ id }}</p>
      <IconType class="icon" />
    </section>
    <section class="detail-pokemon">
      <picture>
        <img class="pokemonImage" :src="image" alt="image" />
      </picture>
      <h3>{{ nameUpperCase(name) }}</h3>
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
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}
.icon {
  padding: 2rem;
  height: 2rem;
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
  font-weight: bold;
  color: black;
}

.pokemon-card {
  background: rgb(72, 63, 251);
  background: radial-gradient(
    circle,
    rgba(220, 194, 106, 0.8) 0%,
    rgba(244, 0, 0, 0.8) 100%
  );
}

.pokemon-card:hover {
  background: rgb(72, 63, 251);
  background: radial-gradient(
    circle,
    rgba(72, 63, 251, 0.8) 0%,
    rgba(70, 252, 244, 0.7) 100%
  );
}

.detail-pokemon img:hover {
  padding: 0.1rem;
}
</style>
