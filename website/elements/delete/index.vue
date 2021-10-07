<template>
  <mad-doc-page>
    <mad-code-block title="'basic'" :code="MadDeleteUsageBasicCode">
      <mad-delete-usage-basic></mad-delete-usage-basic>
    </mad-code-block>
    <mad-code-block title="'size'" :code="MadDeleteUsageSizeCode">
      <mad-delete-usage-size></mad-delete-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadDeleteUsageBasic from './MadDeleteUsageBasic'
import MadDeleteUsageSize from './MadDeleteUsageSize'

import MadDeleteUsageBasicCode from '!raw-loader!./MadDeleteUsageBasic'
import MadDeleteUsageSizeCode from '!raw-loader!./MadDeleteUsageSize'

export default {
  name: 'DeleteUsage',
  components: {
    MadDocPage,
    MadDeleteUsageBasic,
    MadDeleteUsageSize,
  },
  data() {
    return {
      MadDeleteUsageBasicCode,
      MadDeleteUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>
