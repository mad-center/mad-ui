<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageCrossUsageBasicCode">
      <mad-image-cross-usage-basic></mad-image-cross-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadImageCrossUsageBasic from './MadImageCrossUsageBasic'
import MadImageCrossUsageBasicCode from '!raw-loader!./MadImageCrossUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadImageCrossUsageBasic,
  },
  data() {
    return {
      MadImageCrossUsageBasicCode,
    }
  },
}
</script>
