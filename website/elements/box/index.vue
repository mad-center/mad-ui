<template>
  <mad-doc-page>
    <mad-code-block :title="'basic'" :code="MadBoxUsageBasicCode">
      <mad-box-usage-basic></mad-box-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadBoxUsageBasic from './MadBoxUsageBasic'

import MadBoxUsageBasicCode from '!raw-loader!./MadBoxUsageBasic'

export default {
  name: 'MadBoxUsage',
  components: {
    MadDocPage,
    MadBoxUsageBasic,
  },
  data() {
    return {
      MadBoxUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>
