<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadCoverUsageBasicCode">
      <mad-cover-usage-basic></mad-cover-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadCoverUsageBasic from './MadCoverUsageBasic'
import MadCoverUsageBasicCode from '!raw-loader!./MadCoverUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadCoverUsageBasic,
  },
  data() {
    return {
      MadCoverUsageBasicCode,
    }
  },
}
</script>
