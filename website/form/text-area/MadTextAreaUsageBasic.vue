<template>
  <mad-text-area placeholder="textarea placeholder"></mad-text-area>
</template>

<script>
import {
  colorMapSemanticValues,
  sizes,
} from '../../../packages/utils/validator'

export default {
  name: 'MadTextAreaUsageBasic',
  data() {
    return {
      colors: colorMapSemanticValues,
      sizes: sizes,
    }
  },
}
</script>
