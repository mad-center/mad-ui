<template>
  <div class="container" :class="[fluidClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MadContainer',
  props: {
    fluid: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    fluidClass() {
      return this.fluid ? 'variant-fluid' : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/all';

// horizontal gap, which acts as the offset for breakpoints
$gap: 32px !default;
$container-offset: (2 * $gap) !default;

.container {
  position: relative;
  width: auto;
  margin: 0 auto;

  &.variant-fluid {
    max-width: none !important;
    padding-left: $gap;
    padding-right: $gap;
    width: 100%;
  }

  @include breakpoint-min($bp-medium) {
    max-width: $bp-medium -$container-offset;
  }

  @include breakpoint-min($bp-large) {
    max-width: $bp-large -$container-offset;
  }

  @include breakpoint-min($bp-xlarge) {
    max-width: $bp-xlarge -$container-offset;
  }
}
</style>
