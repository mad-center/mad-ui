<template>
  <mad-doc-page>
    <mad-code-block title="append" :code="MadInputAddOnUsageAppendCode">
      <mad-input-add-on-usage-append></mad-input-add-on-usage-append>
    </mad-code-block>
    <mad-code-block title="prepend" :code="MadInputAddOnUsagePrependCode">
      <mad-input-add-on-usage-prepend></mad-input-add-on-usage-prepend>
    </mad-code-block>
    <mad-code-block title="both" :code="MadInputAddOnUsageBothCode">
      <mad-input-add-on-usage-both></mad-input-add-on-usage-both>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadInputAddOnUsageAppend from './MadInputAddOnUsageAppend'
import MadInputAddOnUsageAppendCode from '!raw-loader!./MadInputAddOnUsageAppend'

import MadInputAddOnUsageBoth from './MadInputAddOnUsageBoth'
import MadInputAddOnUsageBothCode from '!raw-loader!./MadInputAddOnUsageBoth'

import MadInputAddOnUsagePrepend from './MadInputAddOnUsagePrepend'
import MadInputAddOnUsagePrependCode from '!raw-loader!./MadInputAddOnUsagePrepend'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadInputAddOnUsageAppend,
    MadInputAddOnUsageBoth,
    MadInputAddOnUsagePrepend,
  },
  data() {
    return {
      MadInputAddOnUsageAppendCode,
      MadInputAddOnUsageBothCode,
      MadInputAddOnUsagePrependCode,
    }
  },
}
</script>
