<template>
  <mad-input size="small"></mad-input>
  <mad-input size="medium"></mad-input>
  <mad-input size="large"></mad-input>
</template>

<script>
import { colorMapSemanticValues } from '../../../packages/utils/validator'

export default {
  name: 'MadInputUsageSize',
  data() {
    return {
      colors: colorMapSemanticValues,
    }
  },
}
</script>
