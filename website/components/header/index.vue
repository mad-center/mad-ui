<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadHeaderUsageBasicCode">
      <mad-header-usage-basic></mad-header-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadHeaderUsageBasic from './MadHeaderUsageBasic'
import MadHeaderUsageBasicCode from '!raw-loader!./MadHeaderUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadHeaderUsageBasic,
  },
  data() {
    return {
      MadHeaderUsageBasicCode,
    }
  },
}
</script>
