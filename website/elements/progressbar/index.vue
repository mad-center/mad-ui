<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadProgressBarUsageBasicCode">
      <mad-progress-bar-usage-basic></mad-progress-bar-usage-basic>
    </mad-code-block>
    <mad-code-block title="color" :code="MadProgressBarUsageColorCode">
      <mad-progress-bar-usage-color></mad-progress-bar-usage-color>
    </mad-code-block>
    <mad-code-block
      title="Indeterminate"
      :code="MadProgressBarUsageIndeterminateCode"
    >
      <mad-progress-bar-usage-indeterminate></mad-progress-bar-usage-indeterminate>
    </mad-code-block>
    <mad-code-block title="size" :code="MadProgressBarUsageSizeCode">
      <mad-progress-bar-usage-size></mad-progress-bar-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadProgressBarUsageBasic from './MadProgressBarUsageBasic'
import MadProgressBarUsageColor from './MadProgressBarUsageColor'
import MadProgressBarUsageIndeterminate from './MadProgressBarUsageIndeterminate'
import MadProgressBarUsageSize from './MadProgressBarUsageSize'

import MadProgressBarUsageBasicCode from '!raw-loader!./MadProgressBarUsageBasic'
import MadProgressBarUsageColorCode from '!raw-loader!./MadProgressBarUsageColor'
import MadProgressBarUsageIndeterminateCode from '!raw-loader!./MadProgressBarUsageIndeterminate'
import MadProgressBarUsageSizeCode from '!raw-loader!./MadProgressBarUsageSize'

export default {
  name: 'MadProgressBarUsage',
  components: {
    MadDocPage,
    MadProgressBarUsageBasic,
    MadProgressBarUsageColor,
    MadProgressBarUsageIndeterminate,
    MadProgressBarUsageSize,
  },
  data() {
    return {
      MadProgressBarUsageBasicCode,
      MadProgressBarUsageColorCode,
      MadProgressBarUsageIndeterminateCode,
      MadProgressBarUsageSizeCode,
    }
  },
}
</script>
