<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadColumnUsageBasicCode">
      <mad-column-usage-basic></mad-column-usage-basic>
    </mad-code-block>
    <mad-code-block title="breakpoint" :code="MadColumnUsageBreakpointCode">
      <mad-column-usage-breakpoint></mad-column-usage-breakpoint>
    </mad-code-block>
    <mad-code-block title="column gap" :code="MadColumnUsageColumnGapCode">
      <mad-column-usage-column-gap></mad-column-usage-column-gap>
    </mad-code-block>
    <mad-code-block title="fixed column" :code="MadColumnUsageFixedColumnCode">
      <mad-column-usage-fixed-column></mad-column-usage-fixed-column>
    </mad-code-block>
    <mad-code-block
      title="fixed percent"
      :code="MadColumnUsageFixedPercentCode"
    >
      <mad-column-usage-fixed-percent></mad-column-usage-fixed-percent>
    </mad-code-block>

    <mad-code-block title="offset" :code="MadColumnUsageOffsetCode">
      <mad-column-usage-offset></mad-column-usage-offset>
    </mad-code-block>
    <mad-code-block title="responsive" :code="MadColumnUsageResponsiveCode">
      <mad-column-usage-responsive></mad-column-usage-responsive>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadColumnUsageBasic from './MadColumnUsageBasic'
import MadColumnUsageBasicCode from '!raw-loader!./MadColumnUsageBasic'

import MadColumnUsageBreakpoint from './MadColumnUsageBreakpoint'
import MadColumnUsageBreakpointCode from '!raw-loader!./MadColumnUsageBreakpoint'

import MadColumnUsageColumnGap from './MadColumnUsageColumnGap'
import MadColumnUsageColumnGapCode from '!raw-loader!./MadColumnUsageColumnGap'

import MadColumnUsageFixedColumn from './MadColumnUsageFixedColumn'
import MadColumnUsageFixedColumnCode from '!raw-loader!./MadColumnUsageFixedColumn'

import MadColumnUsageFixedPercent from './MadColumnUsageFixedPercent'
import MadColumnUsageFixedPercentCode from '!raw-loader!./MadColumnUsageFixedPercent'

import MadColumnUsageOffset from './MadColumnUsageOffset'
import MadColumnUsageOffsetCode from '!raw-loader!./MadColumnUsageOffset'

import MadColumnUsageResponsive from './MadColumnUsageResponsive'
import MadColumnUsageResponsiveCode from '!raw-loader!./MadColumnUsageResponsive'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadColumnUsageBasic,
    MadColumnUsageBreakpoint,
    MadColumnUsageColumnGap,
    MadColumnUsageFixedColumn,
    MadColumnUsageFixedPercent,
    MadColumnUsageOffset,
    MadColumnUsageResponsive,
  },
  data() {
    return {
      MadColumnUsageBasicCode,
      MadColumnUsageBreakpointCode,
      MadColumnUsageColumnGapCode,
      MadColumnUsageFixedColumnCode,
      MadColumnUsageFixedPercentCode,
      MadColumnUsageOffsetCode,
      MadColumnUsageResponsiveCode,
    }
  },
}
</script>
