<template>
  <!--https://www.developintelligence.com/blog/2016/09/how-to-make-circularcurved-text-with-javascript/-->
  <div
    class="circular-text-group"
    :style="{
      height: height,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MadCircularTextGroup',
  props: {
    height: {
      type: String,
      default: '400px',
      required: false,
    },
  },
}
</script>

<style scoped lang="scss">
.circular-text-group {
  position: relative;
  overflow: hidden;
  text-align: center;
  width: 100%;
  //height: 400px; // use props
  border: 1px solid black;
}
</style>
