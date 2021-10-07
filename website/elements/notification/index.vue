<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadNotificationUsageBasicCode">
      <mad-notification-usage-basic></mad-notification-usage-basic>
    </mad-code-block>
    <mad-code-block title="color" :code="MadNotificationUsageColorCode">
      <mad-notification-usage-color></mad-notification-usage-color>
    </mad-code-block>
    <mad-code-block title="dark" :code="MadNotificationUsageDarkCode">
      <mad-notification-usage-dark></mad-notification-usage-dark>
    </mad-code-block>
    <mad-code-block title="light" :code="MadNotificationUsageLightCode">
      <mad-notification-usage-light></mad-notification-usage-light>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadNotificationUsageBasic from './MadNotificationUsageBasic'
import MadNotificationUsageColor from './MadNotificationUsageColor'
import MadNotificationUsageDark from './MadNotificationUsageDark'
import MadNotificationUsageLight from './MadNotificationUsageLight'

import MadNotificationUsageBasicCode from '!raw-loader!./MadNotificationUsageBasic'
import MadNotificationUsageColorCode from '!raw-loader!./MadNotificationUsageColor'
import MadNotificationUsageDarkCode from '!raw-loader!./MadNotificationUsageDark'
import MadNotificationUsageLightCode from '!raw-loader!./MadNotificationUsageLight'

export default {
  name: 'MadNotificationUsage',
  components: {
    MadDocPage,
    MadNotificationUsageBasic,
    MadNotificationUsageColor,
    MadNotificationUsageDark,
    MadNotificationUsageLight,
  },
  data() {
    return {
      MadNotificationUsageBasicCode,
      MadNotificationUsageColorCode,
      MadNotificationUsageDarkCode,
      MadNotificationUsageLightCode,
    }
  },
}
</script>

<style scoped lang="scss"></style>
