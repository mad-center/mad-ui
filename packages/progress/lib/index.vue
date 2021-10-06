<template>
  <progress
    class="progress"
    :class="[colorClass, sizeClass]"
    :value="value"
    :max="max"
  >
    {{ percentage }}
  </progress>
</template>

<script>
import { colorMapValuesNoLight, sizes } from '../../utils/validator'

export default {
  name: 'MadProgress',
  props: {
    value: {
      type: Number,
      required: false,
      default: null,
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    },
    color: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        return [...colorMapValuesNoLight].indexOf(value) !== -1
      },
    },
    size: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        return [...sizes].includes(value) !== -1
      },
    },
  },
  computed: {
    colorClass() {
      if (!this.color) return ''
      return `color-${this.color}`
    },
    sizeClass() {
      if (!this.size) return ''
      return `size-${this.size}`
    },
    percentage() {
      // when this.value is null => 0
      return (this.value / this.max) * 100 + '%'
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../scss/mixins/all';

$progress-bar-background-color: $light !default;
$progress-value-background-color: $dark !default;
$progress-border-radius: $radius-rounded !default;

$progress-indeterminate-duration: 2.5s !default;

// remove white and light color because of it likes background color
$progress-colors: map-remove($color-map, 'white', 'light') !default;

.progress {
  @include block();
  appearance: none;
  // remove default theme style
  border: none;
  border-radius: $progress-border-radius;
  display: block;
  height: $size-normal;
  overflow: hidden;
  padding: 0;
  width: 100%;

  // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/progress
  // set background color or value color by vendor prefix
  // background color
  &::-webkit-progress-bar {
    background-color: $progress-bar-background-color;
  }

  // bar color
  &::-webkit-progress-value {
    background-color: $progress-value-background-color;
  }

  // bar color, diff from webkit
  &::-moz-progress-bar {
    background-color: $progress-value-background-color;
  }

  // bar color, diff from webkit
  &::-ms-fill {
    background-color: $progress-value-background-color;
  }

  // colors
  @each $name, $pair in $progress-colors {
    $color: nth($pair, 1);
    &.color-#{$name} {
      &::-webkit-progress-value {
        background-color: $color;
      }

      &::-moz-progress-bar {
        background-color: $color;
      }

      &::-ms-fill {
        background-color: $color;
      }

      // fix color on indeterminate state
      &:indeterminate {
        background-image: linear-gradient(
          to right,
          $color 30%,
          $progress-bar-background-color 30%
        );
      }
    }
  }

  // state :indeterminate
  &:indeterminate {
    animation-name: moveIndeterminate;
    animation-duration: $progress-indeterminate-duration;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background-color: $progress-bar-background-color;
    // 0%------------30%----------------------------------------------100%
    // |-----text-----|-----------progress-bar-background-color--------|
    background-image: linear-gradient(
      to right,
      $text 30%,
      $progress-bar-background-color 30%
    );
    background-position: top left;
    background-repeat: no-repeat;
    // x axis: 30% * 150% =45%, Y axis is not changed
    // 0%---------------------45%------------------------------------------100%
    // |-----text--------------|-----------progress-bar-background-color----|
    background-size: 150% 100%;

    will-change: background-position;

    &::-webkit-progress-bar {
      background-color: transparent;
    }

    &::-moz-progress-bar {
      background-color: transparent;
    }

    &::-ms-fill {
      animation-name: none;
    }
  }

  // sizes
  &.size-small {
    height: $size-small;
  }

  &.size-medium {
    height: $size-medium;
  }

  &.size-large {
    height: $size-large;
  }

  // keyframes
  @keyframes moveIndeterminate {
    // Note: this value is calculated by debugging
    from {
      // weird: negative value is like margin-left positive value
      // x must >=90%
      background-position: 90% 0;
    }

    to {
      // weird: positive value is like margin-left negative value
      // x must <=-200%
      background-position: -200% 0;
    }
  }
}
</style>
