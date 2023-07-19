<script setup>
import { defineProps } from "vue";
import Popper from "vue3-popper";
import { toIconType, toIconColor } from "../../utils";

const props = defineProps({
  typeName: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button
    class="pokemon-type"
    :style="{ backgroundColor: toIconColor(props.typeName) }"
  >
    <Popper arrow :content="props.typeName" hover placement="bottom">
      <img :src="toIconType(props.typeName)" :alt="props.typeName" />
    </Popper>
  </button>
</template>

<style scoped>
.pokemon-type {
  border-radius: 50%;
  margin-left: 1rem;
  padding: 0.5rem;
  max-width: 2.2rem;
  max-height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.pokemon-type img {
  max-width: 1.2rem;
}
</style>
