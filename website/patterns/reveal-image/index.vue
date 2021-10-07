<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadRevealImageUsageBasicCode">
      <mad-reveal-image-usage-basic></mad-reveal-image-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadRevealImageUsageCustomCode">
      <mad-reveal-image-usage-custom></mad-reveal-image-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadRevealImageUsageBasic from './MadRevealImageUsageBasic'
import MadRevealImageUsageBasicCode from '!raw-loader!./MadRevealImageUsageBasic'
import MadRevealImageUsageCustom from './MadRevealImageUsageCustom'
import MadRevealImageUsageCustomCode from '!raw-loader!./MadRevealImageUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadRevealImageUsageBasic,
    MadRevealImageUsageCustom,
  },
  data() {
    return {
      MadRevealImageUsageBasicCode,
      MadRevealImageUsageCustomCode,
    }
  },
}
</script>
