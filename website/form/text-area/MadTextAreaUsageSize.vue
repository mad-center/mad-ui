<template>
  <mad-text-area
    v-for="size in sizes"
    :key="size"
    :size="size"
    placeholder="textarea placeholder"
  ></mad-text-area>
</template>

<script>
import {
  colorMapSemanticValues,
  sizes,
} from '../../../packages/utils/validator'

export default {
  name: 'MadTextAreaUsageSize',
  data() {
    return {
      colors: colorMapSemanticValues,
      sizes: sizes,
    }
  },
}
</script>
