<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadButtonUsageBasicCode">
      <mad-button-usage-basic></mad-button-usage-basic>
    </mad-code-block>
    <mad-code-block title="size" :code="MadButtonUsageSizeCode">
      <mad-button-usage-size></mad-button-usage-size>
    </mad-code-block>
    <mad-code-block title="color" :code="MadButtonUsageColorCode">
      <mad-button-usage-color></mad-button-usage-color>
    </mad-code-block>
    <mad-code-block title="light" :code="MadButtonUsageLightCode">
      <mad-button-usage-light></mad-button-usage-light>
    </mad-code-block>
    <mad-code-block title="fullwidth" :code="MadButtonUsageFullwidthCode">
      <mad-button-usage-fullwidth></mad-button-usage-fullwidth>
    </mad-code-block>
    <mad-code-block title="outlined" :code="MadButtonUsageOutlinedCode">
      <mad-button-usage-outlined></mad-button-usage-outlined>
    </mad-code-block>
    <mad-code-block title="rounded" :code="MadButtonUsageRoundedCode">
      <mad-button-usage-rounded></mad-button-usage-rounded>
    </mad-code-block>
    <mad-code-block title="disabled" :code="MadButtonUsageDisabledCode">
      <mad-button-usage-disabled></mad-button-usage-disabled>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '../../document/MadDocPage'

import MadButtonUsageBasic from './MadButtonUsageBasic'
import MadButtonUsageBasicCode from '!raw-loader!./MadButtonUsageBasic'

import MadButtonUsageSize from './MadButtonUsageSize'
import MadButtonUsageSizeCode from '!raw-loader!./MadButtonUsageSize'

import MadButtonUsageColor from './MadButtonUsageColor'
import MadButtonUsageColorCode from '!raw-loader!./MadButtonUsageColor'

import MadButtonUsageLight from './MadButtonUsageLight'
import MadButtonUsageLightCode from '!raw-loader!./MadButtonUsageLight'

import MadButtonUsageFullwidth from './MadButtonUsageFullwidth'
import MadButtonUsageFullwidthCode from '!raw-loader!./MadButtonUsageFullwidth'

import MadButtonUsageOutlined from './MadButtonUsageOutlined'
import MadButtonUsageOutlinedCode from '!raw-loader!./MadButtonUsageOutlined'

import MadButtonUsageRounded from './MadButtonUsageRounded'
import MadButtonUsageRoundedCode from '!raw-loader!./MadButtonUsageRounded'

import MadButtonUsageDisabled from './MadButtonUsageDisabled'
import MadButtonUsageDisabledCode from '!raw-loader!./MadButtonUsageDisabled'

export default {
  name: 'MadButtonUsage',
  components: {
    MadDocPage,
    MadButtonUsageBasic,
    MadButtonUsageSize,
    MadButtonUsageColor,
    MadButtonUsageLight,
    MadButtonUsageFullwidth,
    MadButtonUsageOutlined,
    MadButtonUsageRounded,
    MadButtonUsageDisabled,
  },
  data() {
    return {
      MadButtonUsageBasicCode,
      MadButtonUsageSizeCode,
      MadButtonUsageColorCode,
      MadButtonUsageLightCode,
      MadButtonUsageFullwidthCode,
      MadButtonUsageOutlinedCode,
      MadButtonUsageRoundedCode,
      MadButtonUsageDisabledCode,
    }
  },
}
</script>

<style scoped></style>
