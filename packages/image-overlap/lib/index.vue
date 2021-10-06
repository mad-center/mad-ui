<template>
  <div
    class="image-overlap"
    :style="{
      width: width,
      height: height,
    }"
  >
    <img class="image-overlap-item position-top-left" :src="src" alt="" />
    <img class="image-overlap-item position-center" :src="src" alt="" />
    <img class="image-overlap-item position-bottom-right" :src="src" alt="" />
  </div>
</template>

<script>
export default {
  name: 'MadImageOverlap',
  props: {
    height: {
      type: String,
      default: '300px',
      required: false,
    },
    width: {
      type: String,
      default: '180px',
      required: false,
    },
    src: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.image-overlap {
  position: relative;
  border: 1px solid black;

  &-item {
    position: absolute;
    width: 70%;
    height: 70%;
    object-fit: cover;

    &.position {
      &-top-left {
        top: 0;
        left: 0;
        opacity: 0.7;
      }

      &-center {
        right: 5%;
        bottom: 10%;
        z-index: 1;
      }

      &-bottom-right {
        right: 0;
        bottom: 0;
        opacity: 0.7;
      }
    }
  }
}
</style>
