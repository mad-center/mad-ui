<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadClipPathUsageBasicCode">
      <mad-clip-path-usage-basic></mad-clip-path-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadClipPathUsageCustomCode">
      <mad-clip-path-usage-custom></mad-clip-path-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadClipPathUsageBasic from './MadClipPathUsageBasic'
import MadClipPathUsageBasicCode from '!raw-loader!./MadClipPathUsageBasic'
import MadClipPathUsageCustom from './MadClipPathUsageCustom'
import MadClipPathUsageCustomCode from '!raw-loader!./MadClipPathUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadClipPathUsageBasic,
    MadClipPathUsageCustom,
  },
  data() {
    return {
      MadClipPathUsageBasicCode,
      MadClipPathUsageCustomCode,
    }
  },
}
</script>
