<template>
  <div class="mad-box">
    <slot v-if="$slots.default"></slot>
  </div>
</template>

<script>
/**
 * A white box to contain other elements.
 * A container with a shadow, a border, a border radius, and padding.
 */
export default {
  name: 'MadBox',
}
</script>

<style lang="scss">
@import '../../styles/mixins/block';

//props
$box-background-color: white !default;
$box-border: 1px solid black !default;
$box-radius: 6px !default;
$box-shadow: 0 0.5em 1em -0.125em rgba(black, 0.1);
$box-color: black !default;
$box-padding: 1.25rem !default;

$box-link-hover-shadow: 0 0.5em 1em -0.125em rgba(black, 0.1), 0 0 0 1px grey !default;
$box-link-active-shadow: inset 0 1px 2px rgba(black, 0.2), 0 0 0 1px grey !default;

.mad-box {
  @include block;
  display: block;
  background-color: $box-background-color;
  border: $box-border;
  border-radius: $box-radius;
  box-shadow: $box-shadow;
  color: $box-color;
  padding: $box-padding;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: $box-link-hover-shadow;
  }

  &:active {
    box-shadow: $box-link-active-shadow;
  }
}
</style>
