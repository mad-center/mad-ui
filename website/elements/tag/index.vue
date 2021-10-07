<template>
  <mad-doc-page>
    <mad-code-block title="color" :code="MadTagUsageColorCode">
      <mad-tag-usage-color></mad-tag-usage-color>
    </mad-code-block>
    <mad-code-block title="size" :code="MadTagUsageSizeCode">
      <mad-tag-usage-size></mad-tag-usage-size>
    </mad-code-block>
    <mad-code-block title="skew corner" :code="MadTagUsageSkewCornerCode">
      <mad-tag-usage-skew-corner></mad-tag-usage-skew-corner>
    </mad-code-block>
    <mad-code-block title="title" :code="MadTagUsageTitleCode">
      <mad-tag-usage-title></mad-tag-usage-title>
    </mad-code-block>
    <mad-code-block title="combination" :code="MadTagUsageCombinationCode">
      <mad-tag-usage-combination></mad-tag-usage-combination>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadTagUsageColor from './MadTagUsageColor'
import MadTagUsageColorCode from '!raw-loader!./MadTagUsageColor'

import MadTagUsageCombination from './MadTagUsageCombination'
import MadTagUsageCombinationCode from '!raw-loader!./MadTagUsageCombination'

import MadTagUsageSize from './MadTagUsageSize'
import MadTagUsageSizeCode from '!raw-loader!./MadTagUsageSize'

import MadTagUsageSkewCorner from './MadTagUsageSkewCorner'
import MadTagUsageSkewCornerCode from '!raw-loader!./MadTagUsageSkewCorner'

import MadTagUsageTitle from './MadTagUsageTitle'
import MadTagUsageTitleCode from '!raw-loader!./MadTagUsageTitle'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadTagUsageColor,
    MadTagUsageCombination,
    MadTagUsageSize,
    MadTagUsageSkewCorner,
    MadTagUsageTitle,
  },
  data() {
    return {
      MadTagUsageColorCode,
      MadTagUsageCombinationCode,
      MadTagUsageSizeCode,
      MadTagUsageSkewCornerCode,
      MadTagUsageTitleCode,
    }
  },
}
</script>
