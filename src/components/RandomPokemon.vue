<script setup></script>

<template>
    <section class="pokemon-container">
        <picture class="pokemon-image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" />
        </picture>
    </section>
</template>

<style scoped>

.pokemon-container {
    background-color: var(--medium-background);
    border-radius: 1.5rem;
    width: 500px;
    height: 500px;
    margin-left: 13rem;
    position: relative;
}

.pokemon-image img {
    position: absolute;
    width: 25rem;
    top: 3rem;
    left: -8rem;
}

</style>