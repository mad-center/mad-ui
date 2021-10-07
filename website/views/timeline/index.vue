<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadTimelineUsageBasicCode">
      <mad-timeline-usage-basic></mad-timeline-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadTimelineUsageBasic from './MadTimelineUsageBasic'
import MadTimelineUsageBasicCode from '!raw-loader!./MadTimelineUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadTimelineUsageBasic,
  },
  data() {
    return {
      MadTimelineUsageBasicCode,
    }
  },
}
</script>
