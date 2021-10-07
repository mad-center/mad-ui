<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadAlertUsageBasicCode">
      <mad-alert-usage-basic></mad-alert-usage-basic>
    </mad-code-block>
    <mad-code-block title="colors" :code="MadAlertUsageColorsCode">
      <mad-alert-usage-colors></mad-alert-usage-colors>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadAlertUsageCustomCode">
      <mad-alert-usage-custom></mad-alert-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadAlertUsageBasic from './MadAlertUsageBasic'
import MadAlertUsageColors from './MadAlertUsageColors'
import MadAlertUsageCustom from './MadAlertUsageCustom'

import MadAlertUsageBasicCode from '!raw-loader!./MadAlertUsageBasic'
import MadAlertUsageColorsCode from '!raw-loader!./MadAlertUsageColors'
import MadAlertUsageCustomCode from '!raw-loader!./MadAlertUsageCustom'

export default {
  name: 'MadAlertUsage',
  components: {
    MadDocPage,
    MadAlertUsageBasic,
    MadAlertUsageColors,
    MadAlertUsageCustom,
  },
  data() {
    return {
      MadAlertUsageBasicCode,
      MadAlertUsageColorsCode,
      MadAlertUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>
