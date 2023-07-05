<script setup></script>

<template>
  <header class="header">
    <picture class="logo">
      <img src="../assets/img/logo.png" alt="logo" />
    </picture>

    <nav class="navbar">
      <a href="#">HOME</a>
      <a href="#">POKEMONS</a>
      <button class="main-button">
        <a href="">GITHUB</a>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 10%;
}

.logo img{
  width: 9rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-button{
  background-color: var(--color-pop);
  border: none;
  border-radius: 0.3rem;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;
  font-weight: 400;
}
</style>
