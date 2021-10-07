<template>
  <mad-text-area value="readonly value" readonly></mad-text-area>
</template>

<script>
import {
  colorMapSemanticValues,
  sizes,
} from '../../../packages/utils/validator'

export default {
  name: 'MadTextAreaUsageReadonly',
  data() {
    return {
      colors: colorMapSemanticValues,
      sizes: sizes,
    }
  },
}
</script>
