<template>
  <div class="notification" :class="[colorClass, lightClass, darkClass]">
    <button class="delete" @click="handleDelete" />
    <slot />
  </div>
</template>

<script>
/**
 * TODO autoclose with delay
 */

import { colorMapValues } from '../../utils/validator'

export default {
  name: 'MadNotification',
  props: {
    hasDeleteButton: {
      type: Boolean,
      default: true,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        return [...colorMapValues].indexOf(value) !== -1
      },
    },
    light: {
      type: Boolean,
    },
    dark: {
      type: Boolean,
    },
  },
  computed: {
    colorClass() {
      if (!this.color) return ''
      return `color-${this.color}`
    },
    lightClass() {
      if (!this.light) return ''
      return 'variant-light'
    },
    darkClass() {
      if (!this.dark) return ''
      return 'variant-dark'
    },
  },
  methods: {
    handleDelete() {
      this.$el.parentNode.removeChild(this.$el)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../scss/mixins/all';

$notification-background-color: $light !default;
$notification-code-background-color: $color-white !default;
$notification-radius: $radius !default;
// padding-right is more larger to make space for delete icon
$notification-padding: 1.25rem 2.5rem 1.25rem 1.5rem !default;

$notification-colors: $color-map !default;

.notification {
  @include block();
  position: relative;
  background-color: $notification-background-color;
  padding: $notification-padding;
  border-radius: $radius;

  // delete button
  > .delete {
    @include delete;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  // inner code snippet
  code,
  pre {
    background: $notification-code-background-color;
  }

  // colors and color variants
  @each $name, $pair in $notification-colors {
    $color: nth($pair, 1);
    $color-invert: nth($pair, 2);
    &.color-#{$name} {
      background-color: $color;
      color: $color-invert;
      // if has light and dark version
      @if length($pair) >= 4 {
        $color-light: nth($pair, 3);
        $color-dark: nth($pair, 4);
        &.variant-light {
          background-color: $color-light;
          color: $color-dark;
        }
        &.variant-dark {
          background-color: $color-dark;
          color: $color-light;
        }
      }
    }
  }
}
</style>
