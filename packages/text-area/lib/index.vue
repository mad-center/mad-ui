<template>
  <textarea class="textarea" :class="[sizeClass, colorClass, fixedSizeClass]" />
</template>

<script>
import { colorMapSemanticValues, sizes } from '../../utils/validator'

/**
 * readonly
 *
 * semantic colors
 *
 * sizes
 *
 * fixed size mode(enable scrollbar)
 */
export default {
  name: 'MadTextArea',
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
    fixedSize: {
      type: Boolean,
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
    fixedSizeClass() {
      return this.fixedSize ? 'variant-fixed-size' : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/form/input-base';

$textarea-padding: calc(0.75em - 1px) !default;

$textarea-max-height: 40em !default;
$textarea-min-height: 8em !default;

.textarea {
  @include input-base();

  display: block;
  max-width: 100%;
  min-width: 100%;
  max-height: $textarea-max-height;
  min-height: $textarea-min-height;
  padding: $textarea-padding;
  margin-bottom: 0.5rem;
  resize: vertical;

  font-family: inherit;

  // variants
  &.variant-fixed-size {
    resize: none;
  }
}
</style>
