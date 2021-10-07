<template>
  <div id="input-doc-container">
    <mad-doc-page>
      <mad-code-block title="basic" :code="MadInputUsageBasicCode">
        <mad-input-usage-basic></mad-input-usage-basic>
      </mad-code-block>
      <mad-code-block title="color" :code="MadInputUsageColorCode">
        <mad-input-usage-color></mad-input-usage-color>
      </mad-code-block>
      <mad-code-block title="size" :code="MadInputUsageSizeCode">
        <mad-input-usage-size></mad-input-usage-size>
      </mad-code-block>
    </mad-doc-page>
  </div>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadInputUsageBasic from './MadInputUsageBasic'
import MadInputUsageBasicCode from '!raw-loader!./MadInputUsageBasic'

import MadInputUsageColor from './MadInputUsageColor'
import MadInputUsageColorCode from '!raw-loader!./MadInputUsageColor'

import MadInputUsageSize from './MadInputUsageSize'
import MadInputUsageSizeCode from '!raw-loader!./MadInputUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadInputUsageBasic,
    MadInputUsageColor,
    MadInputUsageSize,
  },
  data() {
    return {
      MadInputUsageBasicCode,
      MadInputUsageColorCode,
      MadInputUsageSizeCode,
    }
  },
}
</script>

<style lang="scss">
#input-doc-container input {
  display: block;
  margin-bottom: 0.5rem !important;
}
</style>
