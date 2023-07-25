<script setup>
import { ref } from "vue";

const activeTab = ref("home");
const isNavbarOpen = ref(false);

function selectTab(tab) {
  activeTab.value = tab;
  isNavbarOpen.value = false;
}

function toggleNavbar() {
  isNavbarOpen.value = !isNavbarOpen.value;
}
</script>

<template>
  <header class="header">
    <router-link
          :to="{ name: 'home' }"
          :class="{ active: activeTab === 'home' }"
          @click="selectTab('home')"
          >
      <picture class="logo">
        <img src="../assets/img/logo.png" alt="logo"/>
      </picture>
    </router-link>

    <nav class="navbar">
      <div class="navbar-links" :class="{ open: isNavbarOpen }">
        <router-link
          :to="{ name: 'home' }"
          :class="{ active: activeTab === 'home' }"
          @click="selectTab('home')"
          >HOME</router-link
        >
        <router-link
          :to="{name: 'pokemons' }"
          :class="{ active: activeTab === 'pokemons' }"
          @click="selectTab('pokemons')"
          >POKEMONS</router-link
        >
        <button class="main-button">
          <a href="https://github.com/yulsep">GITHUB</a>
          <img src="../assets/icons/github-icon.svg" alt="logo-github" />
        </button>
      </div>
      <button class="navbar-toggle" @click="toggleNavbar">
        <span class="toggle-icon"><i class="bx bx-chevron-down"></i></span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2% 10%;
}

.logo img {
  width: 9rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.navbar-links {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  max-height: 100%;
  transition: 0.3s ease-in-out;
  top: 100%;
  right: 0;
  align-items: center;
}

.open {
  display: none;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;
  font-weight: 400;
}

.navbar a.active {
  text-decoration: underline;
  text-decoration-color: white;
}

.main-button {
  background-color: var(--color-pop);
  border: none;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  height: 100%;
  width: 7rem;
  justify-content: center;
  margin-left: 1rem;
}

.main-button a {
  margin: 0 1rem 0 0;
}

.bx-chevron-down {
  font-size: 2rem;
  color: var(--color-pop);
}

@media screen and (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }

  .navbar-links {
    flex-direction: row;
    position: absolute;
  }
}
</style>
