<template>
  <div class="input-add-on">
    <slot />
  </div>
</template>

<script>
import MadInput from '@/form/MadInput'

/**
 * https://magic-akari.github.io/solved-by-flexbox/demos/input-add-ons/
 */
export default {
  name: 'MadInputAddOn',
  components: {},
}
</script>

<style scoped lang="scss">
.input-add-on {
  display: flex;
  margin-bottom: 1.5rem;

  ::v-deep &-field {
    flex: 1;
    border: 1px solid rgba(147, 128, 108, 0.25);
    padding: 0.5em 0.75em;

    &:first-child {
      border-radius: 2px 0 0 2px;
    }

    &:last-child {
      border-radius: 0 2px 2px 0;
    }

    &:not(:last-child):not(:first-child) {
      border-radius: 0;
    }

    &:not(:first-child) {
      border-left: 0;
    }

    &:not(:last-child) {
      border-right: 0;
    }
  }

  ::v-deep &-item {
    background-color: rgba(147, 128, 108, 0.1);
    color: #666666;
    border: 1px solid rgba(147, 128, 108, 0.25);
    padding: 0.5em 0.75em;
    display: inline-flex;
    align-items: center;

    &:first-child {
      border-radius: 2px 0 0 2px;
    }

    &:last-child {
      border-radius: 0 2px 2px 0;
    }
  }
}
</style>
