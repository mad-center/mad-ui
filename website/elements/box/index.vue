<template>
  <mad-doc-page>
    <mad-code-block :title="'basic'" :code="MadBoxUsageBasicCode">
      <mad-box-usage-basic></mad-box-usage-basic>
    </mad-code-block>
    <mad-code-block :title="'custom'" :code="MadBoxUsageCustomCode">
      <mad-box-usage-custom></mad-box-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadBoxUsageBasic from './MadBoxUsageBasic'
import MadBoxUsageCustom from './MadBoxUsageCustom'

import MadBoxUsageBasicCode from '!raw-loader!./MadBoxUsageBasic'
import MadBoxUsageCustomCode from '!raw-loader!./MadBoxUsageCustom'

export default {
  name: 'MadBoxUsage',
  components: {
    MadDocPage,
    MadBoxUsageBasic,
    MadBoxUsageCustom,
  },
  data() {
    return {
      MadBoxUsageBasicCode,
      MadBoxUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>
