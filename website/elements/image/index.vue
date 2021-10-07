<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageUsageBasicCode">
      <mad-image-usage-basic></mad-image-usage-basic>
    </mad-code-block>
    <mad-code-block title="rounded" :code="MadImageUsageRoundedCode">
      <mad-image-usage-rounded></mad-image-usage-rounded>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadImageUsageBasic from './MadImageUsageBasic'
import MadImageUsageRounded from './MadImageUsageRounded'

import MadImageUsageBasicCode from '!raw-loader!./MadImageUsageBasic'
import MadImageUsageRoundedCode from '!raw-loader!./MadImageUsageRounded'

export default {
  name: 'MadImageUsage',
  components: {
    MadDocPage,
    MadImageUsageBasic,
    MadImageUsageRounded,
  },
  data() {
    return {
      MadImageUsageBasicCode,
      MadImageUsageRoundedCode,
    }
  },
}
</script>
