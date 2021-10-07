<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadLetterPaperUsageBasicCode">
      <mad-letter-paper-usage-basic></mad-letter-paper-usage-basic>
    </mad-code-block>
    <mad-code-block title="transform" :code="MadLetterPaperUsageTransformCode">
      <mad-letter-paper-usage-transform></mad-letter-paper-usage-transform>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadLetterPaperUsageBasic from './MadLetterPaperUsageBasic'
import MadLetterPaperUsageBasicCode from '!raw-loader!./MadLetterPaperUsageBasic'
import MadLetterPaperUsageTransform from './MadLetterPaperUsageTransform'
import MadLetterPaperUsageTransformCode from '!raw-loader!./MadLetterPaperUsageTransform'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadLetterPaperUsageBasic,
    MadLetterPaperUsageTransform,
  },
  data() {
    return {
      MadLetterPaperUsageBasicCode,
      MadLetterPaperUsageTransformCode,
    }
  },
}
</script>
