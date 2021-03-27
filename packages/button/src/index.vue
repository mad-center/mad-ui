<template>
  <div class="mad-button">
    <!-- your html -->
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MadButton',
  props: {},
  setup() {
    // your code
  },
})
</script>

<style scoped>
.mad-button {
  /* your style */
  border: 1px solid black;
  text-align: center;
}
</style>
