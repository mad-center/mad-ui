<template>
  <div class="column" :class="[columnClass, offsetClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MadColumn',
  props: {
    column: {
      type: [Number, String],
      default: null,
      required: false,
    },
    offset: {
      type: [Number, String],
      default: null,
      required: false,
    },
  },
  computed: {
    columnClass() {
      return this.column ? `column-${this.column}` : ''
    },
    offsetClass() {
      return this.offset ? `offset-${this.offset}` : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/layout/column';
</style>
