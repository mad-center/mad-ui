<template>
  <div
    class="image-reveal"
    :class="[activatingClass, rollingBackClass]"
    :style="{
      width: width,
      height: height,
    }"
  >
    <img
      class="image-reveal-figure"
      :src="src"
      alt=""
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    />
  </div>
</template>

<script>
export default {
  name: 'MadImageReveal',
  props: {
    src: {
      type: String,
      default: '',
      required: true,
    },
    autoPlay: {
      type: Boolean,
      required: false,
    },
    width: {
      type: String,
      default: '640px',
      required: false,
    },
    height: {
      type: String,
      default: '360px',
      required: false,
    },
  },
  data() {
    return {
      activating: false,
      rollingBack: false,
    }
  },
  computed: {
    activatingClass() {
      return this.activating ? 'activating' : ''
    },
    rollingBackClass() {
      return this.rollingBack ? 'rolling-back' : ''
    },
  },
  mounted() {
    this.handleAutoPlay()
  },
  methods: {
    handleAutoPlay() {
      if (this.autoPlay) {
        this.activating = true
      }
    },
    handleMouseEnter() {
      if (!this.autoPlay) {
        this.activating = true
      }
    },
    handleMouseLeave() {
      if (!this.autoPlay) {
        this.activating = false
        this.rollingBack = true

        setTimeout(() => {
          this.rollingBack = false
        }, 1000)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.image-reveal {
  position: relative;
  overflow: hidden;
  width: 640px;
  height: 360px;
  border: 1px solid black;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 25%;
    top: 0;
    background-color: white;
    z-index: 1; //must elevate z-index
    will-change: height;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 25%;
    bottom: 0;
    background-color: white;
    z-index: 1;
    will-change: height;
  }

  &-figure {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 50%;
    transform: translateY(-50%);
  }

  &.activating {
    &::before,
    &::after {
      animation-name: image-reveal;
      animation-timing-function: linear;
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  }

  &.rolling-back {
    &::before,
    &::after {
      animation-name: image-reveal-rollback;
      animation-timing-function: linear;
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  }
}

@keyframes image-reveal {
  from {
    height: 25%;
  }

  to {
    height: 0;
  }
}

@keyframes image-reveal-rollback {
  from {
    height: 0;
  }

  to {
    height: 25%;
  }
}
</style>
