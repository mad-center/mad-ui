<template>
  <div class="tag" :class="[colorClass, cornerSkewClass]">
    <div class="tag-body" :class="[sizeClass]">
      <p v-if="!!title" class="tag-title">
        {{ title }}
      </p>
      <p class="tag-content">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
/**
 * corner skew is variant: use variant-skew
 * color is as theme: use color-? such as color-info
 */

import { colorMapValues, sizes } from '../../utils/validator'

export default {
  name: 'MadTag',
  props: {
    color: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...colorMapValues].indexOf(value) !== -1
      },
    },
    size: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...sizes].indexOf(value) !== -1
      },
    },
    cornerSkew: {
      type: Boolean,
      default: false,
      required: false,
    },
    title: {
      type: String,
      default: '',
      required: false,
    },
    content: {
      type: String,
      default: 'tag content',
      required: true,
    },
  },
  computed: {
    colorClass() {
      return this.color ? `color-${this.color}` : ''
    },
    sizeClass() {
      return this.size ? `size-${this.size}` : ''
    },
    cornerSkewClass() {
      return this.cornerSkew ? `variant-corner-skew` : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/_all';

// prop tag corner color
$tag-corner-colors: $color-map !default;
// prop tag text color
$tag-text-colors: $color-map !default;

// sizes
$tag-sizes: (
  'small': $size-7,
  //default
  'normal': $size-6,
  'medium': $size-5,
  'large': $size-4,
);

// think: can we not hard code this variable?
$corner-skew-width: 60px !default;

.tag {
  //default style
  display: inline-block;
  border: 1px solid black;
  border-left-width: 1rem;
  width: fit-content;
  margin: 0.5rem;

  &-body {
    padding: 0.25em 0.5em;
    font-size: 1rem;

    // sizes (can remove normal key)
    @each $name, $size in $tag-sizes {
      &.size-#{$name} {
        font-size: $size;
      }
    }
  }

  &-title {
    font-size: 1.2em;
  }

  // colors
  @each $name, $pair in $tag-corner-colors {
    $color: nth($pair, 1);
    &.color-#{$name} {
      // border-color
      border-color: $color;

      // variant corner skew
      &.variant-corner-skew {
        position: relative;
        border: 1px solid $color;

        &::before {
          position: absolute;
          content: '';
          width: $corner-skew-width;
          height: 100%;
          clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
          background-color: $color;
        }

        > .tag-body {
          position: relative;
          margin-left: $corner-skew-width; //equals to .variant-corner-skew::before width
        }
      }

      //content color
      .tag-content {
        color: $color;
      }
    }
  }
}
</style>
