<script setup>
import FieldSearch from "../common/FieldSearch.vue";
</script>
<template>
  <section class="headerSearch">
    <h2>FIND YOUR POKEMON</h2>
    <FieldSearch class="fieldSearch" />
  </section>
</template>
<style scoped>
h2 {
  font-size: 2.2rem;
  font-weight: 600400;
  text-shadow: var(--color-pop) 2px 5px;
  line-height: 60px;
}
.headerSearch {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
}

.fieldSearch {
  width: 25%;
  border-radius: 10px;
}
</style>
