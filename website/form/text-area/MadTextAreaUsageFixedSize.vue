<template>
  <mad-text-area fixed-size placeholder="textarea placeholder"></mad-text-area>
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
