<template>
  <input
    class="input"
    :class="[sizeClass, colorClass]"
    :placeholder="placeholder"
  />
</template>

<script>
/**
 * color
 *
 * sizes
 *
 * state
 */

import { colorMapSemanticValues, sizes } from '../../utils/validator'

export default {
  name: 'MadInput',
  props: {
    size: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...sizes].indexOf(value) !== -1
      },
    },
    color: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...colorMapSemanticValues].indexOf(value) !== -1
      },
    },
    placeholder: {
      type: String,
      default: 'Input here',
      required: false,
    },
  },
  computed: {
    sizeClass() {
      return this.size ? `size-${this.size}` : ''
    },
    colorClass() {
      return this.color ? `color-${this.color}` : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/form/input-base';

.input {
  @include input-base();
}
</style>
