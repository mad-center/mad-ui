<template>
  <div class="block">
    <slot />
  </div>
</template>

<script>
/**
 * most basic spacer block
 *
 */
export default {
  name: 'MadBlock',
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/block';

.block {
  @include block;
}
</style>
