<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadLineNoiseUsageBasicCode">
      <mad-line-noise-usage-basic></mad-line-noise-usage-basic>
    </mad-code-block>
    <mad-code-block title="direction" :code="MadLineNoiseUsageDirectionCode">
      <mad-line-noise-usage-direction></mad-line-noise-usage-direction>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadLineNoiseUsageBasic from './MadLineNoiseUsageBasic'
import MadLineNoiseUsageBasicCode from '!raw-loader!./MadLineNoiseUsageBasic'
import MadLineNoiseUsageDirection from './MadLineNoiseUsageDirection'
import MadLineNoiseUsageDirectionCode from '!raw-loader!./MadLineNoiseUsageDirection'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadLineNoiseUsageBasic,
    MadLineNoiseUsageDirection,
  },
  data() {
    return {
      MadLineNoiseUsageBasicCode,
      MadLineNoiseUsageDirectionCode,
    }
  },
}
</script>
