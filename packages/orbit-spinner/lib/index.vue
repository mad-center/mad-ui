<template>
  <div class="orbit-spinner" :style="spinnerStyle">
    <div v-if="single" class="orbit single" />
    <div v-if="!single" class="orbit one" :style="orbitStyle" />
    <div v-if="!single" class="orbit two" :style="orbitStyle" />
    <div v-if="!single" class="orbit three" :style="orbitStyle" />
  </div>
</template>

<script>
/**
 * modified from https://bit.dev/epicmaxco/epic-spinners/orbit-spinner/~code MIT license
 */
export default {
  name: 'MadOrbitSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1500,
      required: false,
    },
    size: {
      type: Number,
      default: 50,
      required: false,
    },
    color: {
      type: String,
      default: '',
      required: false,
    },
    single: {
      type: Boolean,
      required: false,
    },
  },

  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
      }
    },
    orbitStyle() {
      return {
        borderColor: this.color ? this.color : '',
        animationDuration: `${this.animationDuration}ms`,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.orbit-spinner,
.orbit-spinner * {
  box-sizing: border-box;
}

.orbit-spinner {
  position: relative;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  perspective: 800px;
}

.orbit-spinner .orbit {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.orbit-spinner .orbit.single {
  animation: orbit-spinner-orbit-single-animation 1200ms linear infinite;
  border-bottom: 3px solid #ff1d5e;
}

.orbit-spinner .orbit.one {
  animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
  border-bottom: 3px solid #ff1d5e;
}

.orbit-spinner .orbit.two {
  animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
  border-right: 3px solid #23dfa7;
}

.orbit-spinner .orbit.three {
  animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
  border-top: 3px solid #388cd5;
}

@keyframes orbit-spinner-orbit-single-animation {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-one-animation {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-two-animation {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-three-animation {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
