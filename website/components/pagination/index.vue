<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadPaginationUsageBasicCode">
      <mad-pagination-usage-basic></mad-pagination-usage-basic>
    </mad-code-block>
    <mad-code-block title="size" :code="MadPaginationUsageSizeCode">
      <mad-pagination-usage-size></mad-pagination-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadPaginationUsageBasic from './MadPaginationUsageBasic'
import MadPaginationUsageBasicCode from '!raw-loader!./MadPaginationUsageBasic'

import MadPaginationUsageSize from './MadPaginationUsageSize'
import MadPaginationUsageSizeCode from '!raw-loader!./MadPaginationUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadPaginationUsageBasic,
    MadPaginationUsageSize,
  },
  data() {
    return {
      MadPaginationUsageBasicCode,
      MadPaginationUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>
