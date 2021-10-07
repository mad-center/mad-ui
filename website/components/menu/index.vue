<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadMenuUsageBasicCode">
      <mad-menu-usage-basic></mad-menu-usage-basic>
    </mad-code-block>
    <mad-code-block title="size" :code="MadMenuUsageSizeCode">
      <mad-menu-usage-size></mad-menu-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadMenuUsageBasic from './MadMenuUsageBasic'
import MadMenuUsageBasicCode from '!raw-loader!./MadMenuUsageBasic'

import MadMenuUsageSize from './MadMenuUsageSize'
import MadMenuUsageSizeCode from '!raw-loader!./MadMenuUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadMenuUsageBasic,
    MadMenuUsageSize,
  },
  data() {
    return {
      MadMenuUsageBasicCode,
      MadMenuUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>
