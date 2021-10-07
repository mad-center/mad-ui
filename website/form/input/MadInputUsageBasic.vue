<template>
  <mad-input placeholder="custom placeholder"></mad-input>
</template>

<script>
import { colorMapSemanticValues } from '../../../packages/utils/validator'

export default {
  name: 'MadInputUsageBasic',
  data() {
    return {
      colors: colorMapSemanticValues,
    }
  },
}
</script>
