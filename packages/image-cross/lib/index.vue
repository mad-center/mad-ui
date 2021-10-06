<template>
  <div
    class="image-cross"
    :style="{
      backgroundImage: `url(${src})`,
      width: width,
      height: height,
    }"
  />
</template>

<script>
export default {
  name: 'MadImageCross',
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    width: {
      type: String,
      required: false,
      default: '320px',
    },
    height: {
      type: String,
      required: false,
      default: '180px',
    },
  },
}
</script>

<style scoped lang="scss">
.image-cross {
  position: relative;
  overflow: hidden;
  background-position: center center;
  background-size: cover;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
  }

  &::after {
    position: absolute;
    content: '';
    width: 10px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
  }
}
</style>
