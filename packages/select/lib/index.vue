<template>
  <div class="select-container" :class="[sizeClass]">
    <slot />
  </div>
</template>

<script>
import { sizes } from '../../utils/validator'

export default {
  name: 'MadSelect',
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
@import '../../styles/mixins/all';

.select-container {
  display: inline-block;
  align-items: center;
  max-width: 100%;
  position: relative;
  vertical-align: top;
  height: 2.5em;

  ::v-deep select {
    position: relative;
    appearance: none;
    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;

    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    color: black;
    line-height: 1.5;
    height: 2.5em;

    padding: calc(0.5em - 1px) 2.5em calc(0.5em - 1px) calc(0.75em - 1px);
  }

  &::after {
    display: block;
    content: ' ';
    position: absolute;
    right: 0.75em;
    top: 50%;

    border: 3px solid black;
    height: 0.625em; //16*0.625em = 10px
    width: 0.625em;
    border-right: 0;
    border-top: 0;
    pointer-events: none;

    transform: translate(-50%, -50%) rotate(-45deg);
    transform-origin: center;
  }

  //sizes
  &.size-small {
    font-size: $size-small;
  }

  &.size-medium {
    font-size: $size-medium;
  }

  &.size-large {
    font-size: $size-large;
  }
}
</style>
