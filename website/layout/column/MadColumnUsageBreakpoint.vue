<template>
  <mad-row>
    <!-- must define all breakpoints, or will cause view bug-->
    <mad-column
      class="column-xs-12 column-sm-6 column-md-4 column-lg-3 column-xlg-1"
    >
      <p class="column-demo">
        <span class="display-sm-down">.column-xs-12</span>
        <span class="display-sm-to-md">.column-sm-6</span>
        <span class="display-md-to-lg">.column-md-4</span>
        <span class="display-lg-to-xlg">.column-lg-3</span>
        <span class="display-xlg-up">.column-xlg-1</span>
      </p>
    </mad-column>
    <mad-column><p class="column-auto">auto</p></mad-column>
  </mad-row>
</template>

<style scoped lang="scss">
@import '../../../packages/styles/utilities/display';

.column-demo {
  background: lightskyblue;
  text-align: center;
  padding: 0.75em 0;
}

.column-auto {
  background: #eee;
  text-align: center;
  padding: 0.75em 0;
}
</style>
