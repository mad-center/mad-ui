<template>
  <div
    class="cover"
    :class="[reverseClass]"
    :style="{
      backgroundImage: `url(${src})`,
    }"
  >
    <div class="cover-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MadCover',
  props: {
    src: {
      type: String,
      default: '',
      required: true,
    },
    reverse: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    reverseClass() {
      return this.reverse ? 'variant-reverse' : ''
    },
  },
}
</script>

<style scoped lang="scss">
.cover {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  //background-image: url('../assets/2.jpg');
  background-position: center center;
  background-size: cover;

  &-body {
    position: absolute;
    right: 0;
    height: 100%;
    width: 40%;
    background-color: rgba(255, 255, 255, 0.4);

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &.variant-reverse > .cover-body {
    left: 0;
  }
}
</style>
