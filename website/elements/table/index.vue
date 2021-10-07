<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadTableUsageBasicCode">
      <mad-table-usage-basic></mad-table-usage-basic>
    </mad-code-block>
    <mad-code-block title="borderless" :code="MadTableUsageBorderlessCode">
      <mad-table-usage-borderless></mad-table-usage-borderless>
    </mad-code-block>
    <mad-code-block title="color" :code="MadTableUsageColorCode">
      <mad-table-usage-color></mad-table-usage-color>
    </mad-code-block>
    <mad-code-block title="fullwidth" :code="MadTableUsageFullwidthCode">
      <mad-table-usage-fullwidth></mad-table-usage-fullwidth>
    </mad-code-block>
    <mad-code-block
      title="horizontal lined"
      :code="MadTableUsageHorizontalLinedCode"
    >
      <mad-table-usage-horizontal-lined></mad-table-usage-horizontal-lined>
    </mad-code-block>
    <mad-code-block title="hoverable" :code="MadTableUsageHoverableCode">
      <mad-table-usage-hoverable></mad-table-usage-hoverable>
    </mad-code-block>
    <mad-code-block title="narrow" :code="MadTableUsageNarrowCode">
      <mad-table-usage-narrow></mad-table-usage-narrow>
    </mad-code-block>
    <mad-code-block title="striped" :code="MadTableUsageStripedCode">
      <mad-table-usage-striped></mad-table-usage-striped>
    </mad-code-block>
    <mad-code-block title="combination" :code="MadTableUsageCombinationCode">
      <mad-table-usage-combination></mad-table-usage-combination>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadTableUsageBasic from './MadTableUsageBasic'
import MadTableUsageBasicCode from '!raw-loader!./MadTableUsageBasic'

import MadTableUsageBorderless from './MadTableUsageBorderless'
import MadTableUsageBorderlessCode from '!raw-loader!./MadTableUsageBorderless'

import MadTableUsageColor from './MadTableUsageColor'
import MadTableUsageColorCode from '!raw-loader!./MadTableUsageColor'

import MadTableUsageCombination from './MadTableUsageCombination'
import MadTableUsageCombinationCode from '!raw-loader!./MadTableUsageCombination'

import MadTableUsageFullwidth from './MadTableUsageFullwidth'
import MadTableUsageFullwidthCode from '!raw-loader!./MadTableUsageFullwidth'

import MadTableUsageHorizontalLined from './MadTableUsageHorizontalLined'
import MadTableUsageHorizontalLinedCode from '!raw-loader!./MadTableUsageHorizontalLined'

import MadTableUsageHoverable from './MadTableUsageHoverable'
import MadTableUsageHoverableCode from '!raw-loader!./MadTableUsageHoverable'

import MadTableUsageNarrow from './MadTableUsageNarrow'
import MadTableUsageNarrowCode from '!raw-loader!./MadTableUsageNarrow'

import MadTableUsageStriped from './MadTableUsageStriped'
import MadTableUsageStripedCode from '!raw-loader!./MadTableUsageStriped'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadTableUsageBasic,
    MadTableUsageBorderless,
    MadTableUsageColor,
    MadTableUsageCombination,
    MadTableUsageFullwidth,
    MadTableUsageHorizontalLined,
    MadTableUsageHoverable,
    MadTableUsageNarrow,
    MadTableUsageStriped,
  },
  data() {
    return {
      MadTableUsageBasicCode,
      MadTableUsageBorderlessCode,
      MadTableUsageColorCode,
      MadTableUsageCombinationCode,
      MadTableUsageFullwidthCode,
      MadTableUsageHorizontalLinedCode,
      MadTableUsageHoverableCode,
      MadTableUsageNarrowCode,
      MadTableUsageStripedCode,
    }
  },
}
</script>

<style scoped></style>
