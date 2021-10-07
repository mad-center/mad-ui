<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadCircularRippleUsageBasicCode">
      <mad-circular-ripple-usage-basic></mad-circular-ripple-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadCircularRippleUsageBasic from './MadCircularRippleUsageBasic'
import MadCircularRippleUsageBasicCode from '!raw-loader!./MadCircularRippleUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadCircularRippleUsageBasic,
  },
  data() {
    return {
      MadCircularRippleUsageBasicCode,
    }
  },
}
</script>
