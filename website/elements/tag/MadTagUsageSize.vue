<template>
  <mad-tag
    v-for="size in sizes"
    :key="size"
    :size="size"
    :content="content"
  ></mad-tag>
</template>

<script>
import { colorMapValuesNoLight, sizes } from '../../../packages/utils/validator'

export default {
  name: 'MadTagUsageSize',
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
