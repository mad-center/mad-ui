<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadLetterBoxUsageBasicCode">
      <mad-letter-box-usage-basic></mad-letter-box-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadLetterBoxUsageBasic from './MadLetterBoxUsageBasic'
import MadLetterBoxUsageBasicCode from '!raw-loader!./MadLetterBoxUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadLetterBoxUsageBasic,
  },
  data() {
    return {
      MadLetterBoxUsageBasicCode,
    }
  },
}
</script>
