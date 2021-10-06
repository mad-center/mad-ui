<template>
  <div
    class="clip-path"
    :style="{
      '--background-src': `url(${backgroundSrc})`,
      '--foreground-src': `url(${foregroundSrc})`,
      width: width,
      height: height,
    }"
  />
</template>

<script>
export default {
  name: 'MadClipPath',
  props: {
    backgroundSrc: {
      type: String,
      default: '',
      required: true,
    },
    foregroundSrc: {
      type: String,
      default: '',
      required: true,
    },
    width: {
      type: String,
      default: '640px',
      required: false,
    },
    height: {
      type: String,
      default: '320px',
      required: false,
    },
  },
}
</script>

<style scoped lang="scss">
.clip-path {
  // api
  //--background-src: url('');
  //--foreground-src: url('');
  //width: 640px;
  //height: 320px;

  position: relative;
  background-image: var(--background-src);
  background-size: cover;
  filter: brightness(80%);

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-image: var(--foreground-src);
    background-size: cover;
    clip-path: polygon(100% 0, 100% 73%, 74% 100%, 5% 100%);
    filter: brightness(120%);
  }
}
</style>
