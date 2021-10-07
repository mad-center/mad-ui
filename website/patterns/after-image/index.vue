<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadAfterImageUsageBasicCode">
      <mad-after-image-usage-basic></mad-after-image-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadAfterImageUsageBasic from './MadAfterImageUsageBasic'
import MadAfterImageUsageBasicCode from '!raw-loader!./MadAfterImageUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadAfterImageUsageBasic,
  },
  data() {
    return {
      MadAfterImageUsageBasicCode,
    }
  },
}
</script>
