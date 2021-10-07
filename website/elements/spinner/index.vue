<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadOrbitSpinnerUsageBasicCode">
      <mad-orbit-spinner-usage-basic></mad-orbit-spinner-usage-basic>
    </mad-code-block>
    <mad-code-block title="single" :code="MadOrbitSpinnerUsageSingleCode">
      <mad-orbit-spinner-usage-single></mad-orbit-spinner-usage-single>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadOrbitSpinnerUsageBasic from './MadOrbitSpinnerUsageBasic'
import MadOrbitSpinnerUsageBasicCode from '!raw-loader!./MadOrbitSpinnerUsageBasic'
import MadOrbitSpinnerUsageSingle from './MadOrbitSpinnerUsageSingle'
import MadOrbitSpinnerUsageSingleCode from '!raw-loader!./MadOrbitSpinnerUsageSingle'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadOrbitSpinnerUsageBasic,
    MadOrbitSpinnerUsageSingle,
  },
  data() {
    return {
      MadOrbitSpinnerUsageBasicCode,
      MadOrbitSpinnerUsageSingleCode,
    }
  },
}
</script>
