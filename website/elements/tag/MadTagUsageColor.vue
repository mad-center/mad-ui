<template>
  <mad-tag
    v-for="color in colors"
    :key="color"
    :color="color"
    :content="content"
  ></mad-tag>
</template>

<script>
import { colorMapValuesNoLight, sizes } from '../../../packages/utils/validator'

export default {
  name: 'MadTagUsageColor',
  data() {
    return {
      colors: colorMapValuesNoLight,
      sizes: sizes,
      content: 'tag content',
      title: 'tag title',
    }
  },
}
</script>

<style scoped></style>
