<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadWaveUsageBasicCode">
      <mad-wave-usage-basic></mad-wave-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadWaveUsageBasic from './MadWaveUsageBasic'
import MadWaveUsageBasicCode from '!raw-loader!./MadWaveUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadWaveUsageBasic,
  },
  data() {
    return {
      MadWaveUsageBasicCode,
    }
  },
}
</script>
