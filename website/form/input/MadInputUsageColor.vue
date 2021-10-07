<template>
  <mad-input v-for="color in colors" :key="color" :color="color"></mad-input>
</template>

<script>
import { colorMapSemanticValues } from '../../../packages/utils/validator'

export default {
  name: 'MadInputUsageColor',
  data() {
    return {
      colors: colorMapSemanticValues,
    }
  },
}
</script>
