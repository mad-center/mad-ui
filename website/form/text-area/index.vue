<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadTextAreaUsageBasicCode">
      <mad-text-area-usage-basic></mad-text-area-usage-basic>
    </mad-code-block>
    <mad-code-block title="semantic color" :code="MadTextAreaUsageColorCode">
      <mad-text-area-usage-color></mad-text-area-usage-color>
    </mad-code-block>
    <mad-code-block title="size" :code="MadTextAreaUsageSizeCode">
      <mad-text-area-usage-size></mad-text-area-usage-size>
    </mad-code-block>
    <mad-code-block title="readonly" :code="MadTextAreaUsageReadonlyCode">
      <mad-text-area-usage-readonly></mad-text-area-usage-readonly>
    </mad-code-block>
    <mad-code-block title="fixed size" :code="MadTextAreaUsageFixedSizeCode">
      <mad-text-area-usage-fixed-size></mad-text-area-usage-fixed-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadTextAreaUsageBasic from './MadTextAreaUsageBasic'
import MadTextAreaUsageBasicCode from '!raw-loader!./MadTextAreaUsageBasic'

import MadTextAreaUsageColor from './MadTextAreaUsageColor'
import MadTextAreaUsageColorCode from '!raw-loader!./MadTextAreaUsageColor'

import MadTextAreaUsageFixedSize from './MadTextAreaUsageFixedSize'
import MadTextAreaUsageFixedSizeCode from '!raw-loader!./MadTextAreaUsageFixedSize'

import MadTextAreaUsageReadonly from './MadTextAreaUsageReadonly'
import MadTextAreaUsageReadonlyCode from '!raw-loader!./MadTextAreaUsageReadonly'

import MadTextAreaUsageSize from './MadTextAreaUsageSize'
import MadTextAreaUsageSizeCode from '!raw-loader!./MadTextAreaUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadTextAreaUsageBasic,
    MadTextAreaUsageColor,
    MadTextAreaUsageFixedSize,
    MadTextAreaUsageReadonly,
    MadTextAreaUsageSize,
  },
  data() {
    return {
      MadTextAreaUsageBasicCode,
      MadTextAreaUsageColorCode,
      MadTextAreaUsageFixedSizeCode,
      MadTextAreaUsageReadonlyCode,
      MadTextAreaUsageSizeCode,
    }
  },
}
</script>
