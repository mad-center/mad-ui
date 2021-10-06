<template>
  <div class="media">
    <div class="media-figure" :class="[figureOnRightClass]">
      <slot name="figure" />
    </div>
    <div class="media-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MadMedia',
  props: {
    figureOnRight: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    figureOnRightClass() {
      return this.figureOnRight ? 'figure-on-right' : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/_all';

.media {
  display: flex;
  align-items: flex-start;
  border: 1px solid black;
  padding: 0.5em;
  @include block();

  // Trade off:
  // use media-figure div wrapper for img will add one level DOM
  // use direct img element should change &-figure to > img selector
  &-figure {
    margin-right: 1em;

    &.figure-on-right {
      margin-right: 0;
      margin-left: 1em;
      order: 1;
    }
  }

  &-body {
    flex: 1;

    // When using scoped CSS, element in slot within transition element doesn't apply child scope #820
    // v-deep just a work around
    // https://github.com/vuejs/vue-loader/issues/820#issuecomment-396611994
    ::v-deep > p {
      @include block();
    }
  }
}
</style>
