<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageOverlapUsageBasicCode">
      <mad-image-overlap-usage-basic></mad-image-overlap-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadImageOverlapUsageBasic from './MadImageOverlapUsageBasic'
import MadImageOverlapUsageBasicCode from '!raw-loader!./MadImageOverlapUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadImageOverlapUsageBasic,
  },
  data() {
    return {
      MadImageOverlapUsageBasicCode,
    }
  },
}
</script>
