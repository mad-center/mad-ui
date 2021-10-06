<template>
  <div class="mad-pagination">
    <nav
      class="pagination"
      :class="[sizeClass]"
      role="navigation"
      aria-label="pagination"
    >
      <slot />
    </nav>
  </div>
</template>

<script>
/**
 *
 * pagination-previous and pagination-next for incremental navigation
 *
 * pagination-list which displays page items:
 * <li>pagination-link for the page numbers</li>
 * <li>pagination-ellipsis for range separators</li>
 *
 */

import { sizes } from '../../utils/validator'

export default {
  name: 'MadPagination',
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
@import '../scss/mixins/_all';

$pagination-color: $text !default;
$pagination-border-color: $border !default;
$pagination-min-width: 2.5em !default;

$pagination-item-font-size: 1em !default;
$pagination-item-margin: 0.25rem !default;
$pagination-item-padding-left: 0.5em !default;
$pagination-item-padding-right: 0.5em !default;

$pagination-border-radius: $radius !default;

// state define
$pagination-hover-color: $text !default;
$pagination-hover-border-color: $text-dark !default;

$pagination-focus-color: $link-focus !default;
$pagination-focus-border-color: $link-focus-border !default;

$pagination-active-color: $link-active !default;
$pagination-active-border-color: $link-active-border !default;

$pagination-disabled-color: $text-light !default;
$pagination-disabled-background-color: $border !default;
$pagination-disabled-border-color: $border !default;

$pagination-current-color: $color-white !default;
$pagination-current-background-color: $color-blue-500 !default;
$pagination-current-border-color: $color-blue-500 !default;

.mad-pagination {
  .pagination {
    @include block();
    font-size: $size-normal;
    display: flex;
    justify-content: flex-start; //center , flex-end for center right props
    align-items: center;

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

    //variant rounded
    &.variant-rounded {
      .pagination-previous,
      .pagination-next,
      .pagination-link {
        border-radius: $radius-rounded;
      }
    }

    &-list {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    //item
    .pagination-previous,
    .pagination-next,
    .pagination-link {
      appearance: none;
      display: inline-flex;
      justify-content: center; //make inner text center
      margin: $pagination-item-margin;
      padding-left: $pagination-item-padding-left;
      padding-right: $pagination-item-padding-right;
      border: 1px solid $pagination-border-color;
      border-radius: $pagination-border-radius;
      color: $pagination-color;
      min-width: $pagination-min-width;
      cursor: pointer;

      font-size: $pagination-item-font-size;
      height: 2.5em;
      line-height: 1.5; //1.5 * font-size =1.5em
      padding-top: calc(0.5em - 1px);
      padding-bottom: calc(0.5em - 1px);

      &:hover {
        border-color: $pagination-hover-border-color;
      }

      &:focus {
        border-color: $pagination-focus-border-color;
      }

      &:active {
        border-color: $pagination-active-border-color;
      }

      &[disabled] {
        background-color: $pagination-disabled-background-color;
        border-color: $pagination-disabled-border-color;
        color: $pagination-disabled-color;
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    //current link
    .pagination-link {
      &.current {
        background-color: $pagination-current-background-color;
        border-color: $pagination-current-border-color;
        color: $pagination-current-color;
      }
    }

    .pagination-ellipsis {
      font-size: $pagination-item-font-size;
      margin: $pagination-item-margin;
      padding-left: $pagination-item-padding-left;
      padding-right: $pagination-item-padding-right;
    }
  }
}
</style>
