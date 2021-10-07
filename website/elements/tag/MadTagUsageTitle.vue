<template>
  <mad-tag :title="title" :content="content"></mad-tag>
</template>

<script>
import { colorMapValuesNoLight, sizes } from '../../../packages/utils/validator'

export default {
  name: 'MadTagUsageTitle',
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
