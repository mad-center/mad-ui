<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadGearUsageBasicCode">
      <mad-gear-usage-basic></mad-gear-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadGearUsageCustomCode">
      <mad-gear-usage-custom></mad-gear-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadGearUsageBasic from './MadGearUsageBasic'
import MadGearUsageBasicCode from '!raw-loader!./MadGearUsageBasic'
import MadGearUsageCustom from './MadGearUsageCustom'
import MadGearUsageCustomCode from '!raw-loader!./MadGearUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadGearUsageBasic,
    MadGearUsageCustom,
  },
  data() {
    return {
      MadGearUsageBasicCode,
      MadGearUsageCustomCode,
    }
  },
}
</script>
