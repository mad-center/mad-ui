<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadContainerUsageBasicCode">
      <mad-container-usage-basic></mad-container-usage-basic>
    </mad-code-block>
    <mad-code-block title="fluid" :code="MadContainerUsageFluidCode">
      <mad-container-usage-fluid></mad-container-usage-fluid>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadContainerUsageBasic from './MadContainerUsageBasic'
import MadContainerUsageBasicCode from '!raw-loader!./MadContainerUsageBasic'
import MadContainerUsageFluid from './MadContainerUsageFluid'
import MadContainerUsageFluidCode from '!raw-loader!./MadContainerUsageFluid'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadContainerUsageBasic,
    MadContainerUsageFluid,
  },
  data() {
    return {
      MadContainerUsageBasicCode,
      MadContainerUsageFluidCode,
    }
  },
}
</script>
