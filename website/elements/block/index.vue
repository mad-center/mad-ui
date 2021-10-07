<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadBlockUsageBasicCode">
      <mad-block-usage-basic>block 1 text</mad-block-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadBlockUsageBasic from './MadBlockUsageBasic'
import MadBlockUsageBasicCode from '!raw-loader!./MadBlockUsageBasic'

export default {
  name: 'MadBlockUsage',
  components: {
    MadDocPage,
    MadBlockUsageBasic,
  },
  data() {
    return {
      MadBlockUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>
