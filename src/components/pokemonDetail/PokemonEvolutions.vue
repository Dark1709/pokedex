<template>
    <div class="pokemon-evolutions">
      <header>
        <h3>Evolution</h3>
      </header>
      <div class="pokemon-evolutions-container">
        <div class="pokemon-evolution-single">
          <picture>
            <img src="" alt="Charmander" />
          </picture>
          <p>Charmander</p>
        </div>
        <div class="pokemon-evolution-single">
          <picture>
            <img src="" alt="Charmeleon" />
          </picture>
          <p>Charmeleon</p>
        </div>
        <div class="pokemon-evolution-single">
          <picture>
            <img src="" alt="Charizard" />
          </picture>
          <p>Charizard</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  //  props for this component
  </script>
  
  <style scoped>
  .pokemon-evolutions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .pokemon-evolutions-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>