<script setup></script>

<template>
    <section class="search-container">
        <div class="title">
            <h2 >WHO IS THAT POKEMON?</h2>    
        </div>
        <div class="search">
            <p>
                Find your favorite Pokemon! It's as easy as typing in the name or number corresponding to the National Pokédex and you're done.
            </p>
            <div class="search-bar">
                <input type="text" placeholder="Enter the name or id of the Pokemon(1-898)..."  />
                <span class="input-icon"></span>
            </div>
        </div>
    </section>
</template>

<style scoped>

.search-container {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


.title h2{
    font-size: 3rem;
    font-weight: 600;
    text-shadow: var(--color-pop) 2px 5px;
    line-height: 60px;
}

.search-bar{
    background-color: var(--medium-background);
    height: 2rem;
}

.search p{
    margin-bottom: 4rem;
}

.search-bar input{
    background: none;
    width: 100%;
    height: 100%;
    background-color: var(--medium-background);
    border-radius: 10px;
    border: none;
}

</style>