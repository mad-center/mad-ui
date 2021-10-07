<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadShieldUsageBasicCode">
      <mad-shield-usage-basic></mad-shield-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadShieldUsageBasic from './MadShieldUsageBasic'
import MadShieldUsageBasicCode from '!raw-loader!./MadShieldUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadShieldUsageBasic,
  },
  data() {
    return {
      MadShieldUsageBasicCode,
    }
  },
}
</script>
