<template>
  <mad-progress-bar
    v-for="value in colorMapValuesNoLight"
    :key="value"
    :value="40"
    :color="value"
  ></mad-progress-bar>
</template>

<script>
import { colorMapValuesNoLight } from '../../../packages/utils/validator'

export default {
  name: 'MadProgressBarUsageColor',
  data() {
    return {
      colorMapValuesNoLight,
    }
  },
}
</script>
