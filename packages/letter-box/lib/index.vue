<template>
  <div
    class="letter-box"
    :style="{
      height: height,
      width: width,
      backgroundImage: `url(${src})`,
    }"
  >
    <div class="letter-box-line position-top">
      <p class="letter-box-content position-right">
        {{ topText }}
      </p>
    </div>
    <div class="letter-box-line position-bottom">
      <p class="letter-box-content position-bottom">
        {{ bottomText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MadLetterBox',
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    height: {
      type: String,
      required: false,
      default: '360px',
    },
    width: {
      type: String,
      required: false,
      default: '640px',
    },
    topText: {
      type: String,
      required: false,
      default: '',
    },
    bottomText: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.letter-box {
  position: relative;
  width: 640px;
  height: 360px;
  filter: brightness(150%);
  background-size: cover;
  background-position: center center;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 20%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    border-bottom: 2px solid black;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 20%;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    border-top: 2px solid black;
  }

  &-line {
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: white;
    opacity: 0.7;
    z-index: -1;

    &.position-top {
      top: 15%;
      left: 20%;
    }

    &.position-bottom {
      top: 85%;
      left: 25%;
    }
  }

  &-content {
    position: absolute;
    margin: 0;
    width: fit-content;
    color: white;

    &.position-right {
      transform: translateY(-50%);
      left: 100%;
      padding-left: 10px;
    }

    &.position-bottom {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
