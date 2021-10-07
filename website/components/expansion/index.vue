<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadExpansionUsageBasicCode">
      <mad-expansion-usage-basic></mad-expansion-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadExpansionUsageBasic from './MadExpansionUsageBasic'
import MadExpansionUsageBasicCode from '!raw-loader!./MadExpansionUsageBasic'

export default {
  name: 'MadExpansionUsage',
  components: {
    MadDocPage,
    MadExpansionUsageBasic,
  },
  data() {
    return {
      MadExpansionUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>
