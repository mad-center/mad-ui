<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadInsetBorderUsageBasicCode">
      <mad-inset-border-usage-basic></mad-inset-border-usage-basic>
    </mad-code-block>
    <mad-code-block title="lined" :code="MadInsetBorderUsageLinedCode">
      <mad-inset-border-usage-lined></mad-inset-border-usage-lined>
    </mad-code-block>
    <mad-code-block title="animated" :code="MadInsetBorderUsageAnimatedCode">
      <mad-inset-border-usage-animated></mad-inset-border-usage-animated>
    </mad-code-block>
    <mad-code-block title="group" :code="MadInsetBorderUsageGroupCode">
      <mad-inset-border-usage-group></mad-inset-border-usage-group>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadInsetBorderUsageAnimated from './MadInsetBorderUsageAnimated'
import MadInsetBorderUsageAnimatedCode from '!raw-loader!./MadInsetBorderUsageAnimated'
import MadInsetBorderUsageBasic from './MadInsetBorderUsageBasic'
import MadInsetBorderUsageBasicCode from '!raw-loader!./MadInsetBorderUsageBasic'
import MadInsetBorderUsageGroup from './MadInsetBorderUsageGroup'
import MadInsetBorderUsageGroupCode from '!raw-loader!./MadInsetBorderUsageGroup'
import MadInsetBorderUsageLined from './MadInsetBorderUsageLined'
import MadInsetBorderUsageLinedCode from '!raw-loader!./MadInsetBorderUsageLined'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadInsetBorderUsageAnimated,
    MadInsetBorderUsageBasic,
    MadInsetBorderUsageGroup,
    MadInsetBorderUsageLined,
  },
  data() {
    return {
      MadInsetBorderUsageAnimatedCode,
      MadInsetBorderUsageBasicCode,
      MadInsetBorderUsageGroupCode,
      MadInsetBorderUsageLinedCode,
    }
  },
}
</script>
