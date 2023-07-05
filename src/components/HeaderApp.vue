<script setup></script>

<template>
  <header class="header">
    <picture class="image">
      <img src="" alt="logo" />
    </picture>

    <nav class="navbar">
      <a href="#">Home</a>
      <a href="#">Pokemons</a>
      <a href="">GitHub</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background);
  padding: 1rem 1rem;
}
.image {
  background-color: blue;
  width: 30vh;
  height: 7vh;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;
}
</style>
