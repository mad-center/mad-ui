<template>
  <a class="delete" :class="[sizeClass]" />
</template>

<script>
export default {
  name: 'MadDelete',
  props: {
    size: {
      type: String,
      default: '',
      validator: function (value) {
        return ['', 'small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
  },
  computed: {
    sizeClass() {
      if (!this.size) return ''
      return `size-${this.size}`
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/all';

.delete {
  @include delete;
}
</style>
