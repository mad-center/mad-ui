<template>
  <mad-text-area
    v-for="color in colors"
    :key="color"
    :color="color"
    placeholder="textarea placeholder"
  ></mad-text-area>
</template>

<script>
import {
  colorMapSemanticValues,
  sizes,
} from '../../../packages/utils/validator'

export default {
  name: 'MadTextAreaUsageColor',
  data() {
    return {
      colors: colorMapSemanticValues,
      sizes: sizes,
    }
  },
}
</script>
