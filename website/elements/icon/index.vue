<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadIconUsageBasicCode">
      <mad-icon-usage-basic></mad-icon-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'
import MadIconUsageBasic from './MadIconUsageBasic'
import MadIconUsageBasicCode from '!raw-loader!./MadIconUsageBasic'

export default {
  name: 'MadIconUsage',
  components: {
    MadDocPage,
    MadIconUsageBasic,
  },
  data() {
    return {
      MadIconUsageBasicCode,
    }
  },
}
</script>
