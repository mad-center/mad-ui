<template>
  <mad-doc-page>
    <mad-code-block title="quotation mark" :code="MadTextUsageQuotationCode">
      <mad-text-usage-quotation></mad-text-usage-quotation>
    </mad-code-block>
    <mad-code-block title="afterimage" :code="MadTextUsageAfterimageCode">
      <mad-text-usage-afterimage></mad-text-usage-afterimage>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadTextUsageAfterimage from './MadTextUsageAfterimage'
import MadTextUsageAfterimageCode from '!raw-loader!./MadTextUsageAfterimage'
import MadTextUsageQuotation from './MadTextUsageQuotation'
import MadTextUsageQuotationCode from '!raw-loader!./MadTextUsageQuotation'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadTextUsageAfterimage,
    MadTextUsageQuotation,
  },
  data() {
    return {
      MadTextUsageAfterimageCode,
      MadTextUsageQuotationCode,
    }
  },
}
</script>
