<template>
  <mad-select v-for="size in sizes" :key="size" :size="size">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </mad-select>
</template>

<script>
import { sizes } from '../../../packages/utils/validator'

export default {
  name: 'MadSelectUsageSize',
  data() {
    return {
      sizes: sizes,
    }
  },
}
</script>
