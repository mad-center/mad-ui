<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadModalUsageBasicCode">
      <mad-modal-usage-basic></mad-modal-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadModalUsageBasic from './MadModalUsageBasic'
import MadModalUsageBasicCode from '!raw-loader!./MadModalUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadModalUsageBasic,
  },
  data() {
    return {
      MadModalUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>
