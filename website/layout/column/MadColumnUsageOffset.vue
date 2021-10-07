<template>
  <mad-row>
    <mad-column column="6" offset="6">
      <p class="column-demo">column 6/12 with offset 6/12</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="6" offset="one-fifth">
      <p class="column-demo">column 6/12 with offset one-fifth</p>
    </mad-column>
  </mad-row>
</template>

<style scoped lang="scss">
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
