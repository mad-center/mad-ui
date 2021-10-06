<template>
  <div
    class="after-image"
    :style="{
      height: height,
      width: width,
      backgroundImage: 'url(' + src + ')',
    }"
  >
    <div
      class="after-image-foreground"
      :style="{
        backgroundImage: 'url(' + src + ')',
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'MadAfterImage',
  props: {
    height: {
      type: String,
      default: '',
      required: false,
    },
    width: {
      type: String,
      default: '',
      required: false,
    },
    src: {
      type: [String, Object],
      default: '',
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.after-image {
  position: relative;
  overflow: hidden;
  //default size
  width: 640px;
  height: 320px;
  //background-image: url('../assets/3.jpg'); //set by props
  background-size: cover;

  &-foreground {
    position: absolute;
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -30%);
    width: 50%;
    height: 50%;
    //background-image: url('../assets/3.jpg'); //set by props
    background-size: cover;
    filter: brightness(130%);
    z-index: 1;
  }

  //use ::after to set background
  &::after {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
