<template>
  <div
    class="row"
    :class="[activatedFromClass, variantGapClass, columnGapClass]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MadRow',
  props: {
    activatedFrom: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return ['', 'sm', 'md', 'lg', 'xlg'].indexOf(value) !== -1
      },
    },
    columnGap: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      setVariantGapClass: false,
    }
  },
  computed: {
    activatedFromClass() {
      return this.activatedFrom ? `activated-from-${this.activatedFrom}` : ''
    },
    columnGapClass() {
      if (this.columnGap) {
        this.toggleVariantGapClass()
        return `column-gap-${this.columnGap}`
      } else {
        return ''
      }
    },
    variantGapClass() {
      return this.setVariantGapClass ? 'variant-gap' : ''
    },
  },
  methods: {
    toggleVariantGapClass() {
      this.setVariantGapClass = true
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/layout/row';

.row.variant-gap {
  --columnGap: $column-gap;

  ::v-deep > .column {
    padding-left: var(--columnGap);
    padding-right: var(--columnGap);
  }

  @for $i from 0 through 8 {
    &.column-gap-#{$i} {
      --columnGap: #{$i * 0.25rem};
    }
  }
}
</style>
