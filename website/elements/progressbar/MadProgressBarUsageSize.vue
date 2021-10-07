<template>
  <mad-progress-bar
    v-for="size in sizes"
    :key="size"
    :value="40"
    :size="size"
  ></mad-progress-bar>
</template>

<script>
import { sizes } from '../../../packages/utils/validator'

export default {
  name: 'MadProgressBarUsageSize',
  data() {
    return {
      sizes,
    }
  },
}
</script>

<style scoped></style>
