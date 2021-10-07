<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadSelectUsageBasicCode">
      <mad-select-usage-basic></mad-select-usage-basic>
    </mad-code-block>
    <mad-code-block title="size" :code="MadSelectUsageSizeCode">
      <mad-select-usage-size></mad-select-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadSelectUsageBasic from './MadSelectUsageBasic'
import MadSelectUsageBasicCode from '!raw-loader!./MadSelectUsageBasic'

import MadSelectUsageSize from './MadSelectUsageSize'
import MadSelectUsageSizeCode from '!raw-loader!./MadSelectUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadSelectUsageBasic,
    MadSelectUsageSize,
  },
  data() {
    return {
      MadSelectUsageBasicCode,
      MadSelectUsageSizeCode,
    }
  },
}
</script>
