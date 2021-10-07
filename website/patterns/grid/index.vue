<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadGridUsageBasicCode">
      <mad-grid-usage-basic></mad-grid-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadGridUsageCustomCode">
      <mad-grid-usage-custom></mad-grid-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadGridUsageBasic from './MadGridUsageBasic'
import MadGridUsageBasicCode from '!raw-loader!./MadGridUsageBasic'
import MadGridUsageCustom from './MadGridUsageCustom'
import MadGridUsageCustomCode from '!raw-loader!./MadGridUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadGridUsageBasic,
    MadGridUsageCustom,
  },
  data() {
    return {
      MadGridUsageBasicCode,
      MadGridUsageCustomCode,
    }
  },
}
</script>
