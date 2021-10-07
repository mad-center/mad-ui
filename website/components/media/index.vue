<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadMediaUsageBasicCode">
      <mad-media-usage-basic></mad-media-usage-basic>
    </mad-code-block>
    <mad-code-block
      title="figure on right"
      :code="MadMediaUsageFigureOnRightCode"
    >
      <mad-media-usage-figure-on-right></mad-media-usage-figure-on-right>
    </mad-code-block>
    <mad-code-block title="nested" :code="MadMediaUsageNestedCode">
      <mad-media-usage-nested></mad-media-usage-nested>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadMediaUsageBasic from './MadMediaUsageBasic'
import MadMediaUsageBasicCode from '!raw-loader!./MadMediaUsageBasic'
import MadMediaUsageFigureOnRight from './MadMediaUsageFigureOnRight'
import MadMediaUsageFigureOnRightCode from '!raw-loader!./MadMediaUsageFigureOnRight'
import MadMediaUsageNested from './MadMediaUsageNested'
import MadMediaUsageNestedCode from '!raw-loader!./MadMediaUsageNested'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadMediaUsageBasic,
    MadMediaUsageFigureOnRight,
    MadMediaUsageNested,
  },
  data() {
    return {
      MadMediaUsageBasicCode,
      MadMediaUsageFigureOnRightCode,
      MadMediaUsageNestedCode,
    }
  },
}
</script>

<style scoped></style>
