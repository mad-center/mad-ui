<template>
  <span class="icon" :class="[sizeClass]">
    <slot />
  </span>
</template>

<script>
import { sizes } from 'packages/utils/validator'

export default {
  name: 'MadIcon',
  props: {
    size: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...sizes].indexOf(value) !== -1
      },
    },
  },
  computed: {
    sizeClass() {
      return this.size ? `size-${this.size}` : ''
    },
  },
}
</script>

<style scoped lang="scss">
$icon-dimensions-small: 1rem !default;
$icon-dimensions: 1.5rem !default;
$icon-dimensions-medium: 2rem !default;
$icon-dimensions-large: 2.5rem !default;

.icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: $icon-dimensions;
  width: $icon-dimensions;

  // Sizes
  &.size-small {
    height: $icon-dimensions-small;
    width: $icon-dimensions-small;
  }

  &.size-medium {
    height: $icon-dimensions-medium;
    width: $icon-dimensions-medium;
  }

  &.size-large {
    height: $icon-dimensions-large;
    width: $icon-dimensions-large;
  }
}
</style>
