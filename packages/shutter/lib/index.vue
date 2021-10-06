<template>
  <div
    class="shutter"
    :class="[directionClass]"
    :style="{
      backgroundImage: `url(${src})`,
      width: width,
      height: height,
    }"
  />
</template>

<script>
export default {
  name: 'MadShutter',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      required: false,
    },
    src: {
      type: String,
      default: '',
      required: true,
    },
    width: {
      type: String,
      default: '600px',
      required: false,
    },
    height: {
      type: String,
      default: '300px',
      required: false,
    },
  },
  computed: {
    directionClass() {
      return this.direction ? `direction-${this.direction}` : ''
    },
  },
}
</script>

<style scoped lang="scss">
.shutter {
  //background-image: url('../../src/assets/7.jpg');
  width: 600px;
  height: 300px;

  position: relative;
  overflow: hidden;
  background-size: cover;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
  }

  &.direction {
    &-horizontal::after {
      background-image: linear-gradient(transparent 4px, black 5px);
      background-size: 100% 5px;
      opacity: 0.7;
    }

    &-vertical::after {
      background-image: linear-gradient(to right, transparent 4px, black 5px);
      background-size: 5px 100%;
      opacity: 0.7;
    }

    &-right-leaning::after {
      /* square(25+25) = 7.07 based on line gap 5px*/
      background-image: linear-gradient(
        45deg,
        transparent 0,
        transparent 50%,
        black 50%,
        black 51%,
        transparent 51%,
        transparent 100%
      );
      background-size: 7.07px 7.07px, cover;
      opacity: 0.7;
    }

    &-left-leaning::after {
      /* square(25+25) = 7.07 based on line gap 5px*/
      background-image: linear-gradient(
        -45deg,
        transparent 0,
        transparent 50%,
        black 50%,
        black 51%,
        transparent 51%,
        transparent 100%
      );
      background-size: 7.07px 7.07px, cover;
      opacity: 0.7;
    }
  }
}
</style>
