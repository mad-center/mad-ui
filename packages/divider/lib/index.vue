<template>
  <div class="divider" :class="{ 'has-label': label }" role="separator">
    <label v-if="label" class="divider-label" :class="align">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'MadDivider',
  props: {
    label: String,
    align: {
      type: String,
      default: 'center',
    },
  },
}
</script>

<style scoped lang="scss">
// ui-divider is 41px height
.divider {
  position: relative;
  margin: 0.5rem 0;
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;

  &.has-label {
    margin: 20px 0;
  }

  &-label {
    position: absolute;
    top: -12px; /* 12=1/2 * 24px */
    padding: 0 10px;
    line-height: 24px;
    color: #7d7d7d;
    font-size: 14px;
    background: #fff;

    &.center {
      left: 50%;
      transform: translateX(-50%);
    }

    &.left {
      left: 5%;
    }

    &.right {
      right: 5%;
    }
  }
}
</style>
