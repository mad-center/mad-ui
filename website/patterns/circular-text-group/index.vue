<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadCircularTextGroupUsageBasicCode">
      <mad-circular-text-group-usage-basic></mad-circular-text-group-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadCircularTextGroupUsageBasic from './MadCircularTextGroupUsageBasic'
import MadCircularTextGroupUsageBasicCode from '!raw-loader!./MadCircularTextGroupUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadCircularTextGroupUsageBasic,
  },
  data() {
    return {
      MadCircularTextGroupUsageBasicCode,
    }
  },
}
</script>
