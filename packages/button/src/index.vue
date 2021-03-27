<template>
  <button class="mad-button">
    <!-- your html -->
    <slot />
  </button>
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

<style scoped lang="scss">
.mad-button {
  background-color: white;
  color: black;
  outline: none;
  border: 2px solid black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
}
</style>
