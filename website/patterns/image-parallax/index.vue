<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageParallaxUsageBasicCode">
      <mad-image-parallax-usage-basic></mad-image-parallax-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadImageParallaxUsageBasic from './MadImageParallaxUsageBasic'
import MadImageParallaxUsageBasicCode from '!raw-loader!./MadImageParallaxUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadDocPage,
    MadImageParallaxUsageBasic,
  },
  data() {
    return {
      MadImageParallaxUsageBasicCode,
    }
  },
}
</script>
