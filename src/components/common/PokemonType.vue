<script setup>

    import { defineProps } from 'vue';
    import Popper from "vue3-popper";
    import { toIconType, toIconColor } from '../../utils'

    const props = defineProps({
        typeName: {
        type: String,
        required: true,
        },
    })

</script>
<template>
    <button class="pokemon-type" :style="{ backgroundColor: toIconColor(typeName) }">
      <Popper arrow :content="typeName" hover placement="bottom">
        <img :src="toIconType(typeName)" :alt="typeName"/>
      </Popper>
    </button>
  </template>
  
<style scoped>
.pokemon-type{
    border-radius: 50%;
    margin: 1rem;
    max-width: 3rem;
    max-height: 3rem;
    padding: 4%;
  }

</style>