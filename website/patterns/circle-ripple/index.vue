<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadCircleRippleUsageBasicCode">
      <mad-circle-ripple-usage-basic></mad-circle-ripple-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadCircleRippleUsageCustomCode">
      <mad-circle-ripple-usage-custom></mad-circle-ripple-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadCircleRippleUsageBasic from './MadCircleRippleUsageBasic'
import MadCircleRippleUsageBasicCode from '!raw-loader!./MadCircleRippleUsageBasic'
import MadCircleRippleUsageCustom from './MadCircleRippleUsageCustom'
import MadCircleRippleUsageCustomCode from '!raw-loader!./MadCircleRippleUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadCircleRippleUsageBasic,
    MadCircleRippleUsageCustom,
  },
  data() {
    return {
      MadCircleRippleUsageBasicCode,
      MadCircleRippleUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>
