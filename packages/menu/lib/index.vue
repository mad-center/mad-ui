<template>
  <div class="mad-menu">
    <aside class="menu" :class="[sizeClass]">
      <slot />
    </aside>
  </div>
</template>

<script>
import { sizes } from 'packages/utils/validator'

/**
 * sizes variants
 */
export default {
  name: 'MadMenu',
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

<style lang="scss">
@import '../../styles/mixins/_all';

// copy from bulma impl
$menu-item-color: $text !default;
$menu-item-radius: $radius-small !default;
$menu-item-hover-color: $text-dark !default;
$menu-item-hover-background-color: $color-gray-100 !default;
$menu-item-active-color: $link-invert !default;
$menu-item-active-background-color: $color-blue-600 !default;

$menu-list-border-left: 1px solid $border !default;
$menu-list-line-height: 1.4 !default;
$menu-list-link-padding: 0.5em 0.75em !default;
$menu-nested-list-margin: 0.75em !default;
$menu-nested-list-padding-left: 0.75em !default;

$menu-label-color: $text-light !default;
$menu-label-font-size: 1em !default;
$menu-label-letter-spacing: 0.1em !default;
$menu-label-spacing: 1em !default;

// .namespace.mad-ui just a work around for css class name
// because i want to keep outer slot content css class like this:
// menu-label, menu-list
// NOT mad-menu-list, mad-menu-list

//side notes:
// 1. css module not work for inner element
// 1. keep scoped css,not global css

.mad-menu {
  .menu {
    font-size: $size-normal;

    &-label {
      color: $menu-label-color;
      font-size: $menu-label-font-size;
      letter-spacing: $menu-label-letter-spacing;
      text-transform: uppercase;

      &:not(:first-child) {
        margin-top: $menu-label-spacing;
      }

      &:not(:last-child) {
        margin-bottom: $menu-label-spacing;
      }
    }

    &-list {
      line-height: $menu-list-line-height;

      a {
        border-radius: $menu-item-radius;
        color: $menu-item-color;
        display: block;
        padding: $menu-list-link-padding;
        cursor: pointer;

        &:hover {
          background-color: $menu-item-hover-background-color;
          color: $menu-item-hover-color;
        }

        // state active
        &.state-active {
          background-color: $menu-item-active-background-color;
          color: $menu-item-active-color;
        }
      }

      //nested list
      li ul {
        border-left: $menu-list-border-left;
        margin: $menu-nested-list-margin;
        padding-left: $menu-nested-list-padding-left;
      }
    }

    // Sizes
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
}
</style>
