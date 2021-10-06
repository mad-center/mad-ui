<template>
  <div class="gear-group">
    <div
      class="gear"
      :class="[rotateDirectionClass]"
      :style="{
        height: `${height}px`,
        width: `${width}px`,
        '--border-color': borderColor,
        '--fill-color': fillColor,
      }"
    >
      <span
        v-for="i in normalizedTooth"
        :key="i"
        class="sawtooth"
        :class="`sawtooth-${i}`"
        :style="{
          '--tooth-width': `${toothWidth}px`,
          '--tooth-height': finalToothHeight,
          '--tooth-top': `-${toothHeight}px`,
          transform: `translateX(-50%) rotate(${rotateDegree(
            normalizedTooth,
            i
          )}deg)`,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MadGear',
  props: {
    tooth: {
      type: Number,
      default: 12,
      required: false,
    },
    toothHeight: {
      type: Number,
      default: 10,
      required: false,
    },
    toothWidth: {
      type: Number,
      default: 15,
      required: false,
    },
    height: {
      type: Number,
      default: 100,
      required: false,
    },
    width: {
      type: Number,
      default: 100,
      required: false,
    },
    borderColor: {
      type: String,
      default: 'black',
      required: false,
    },
    fillColor: {
      type: String,
      default: 'white',
      required: false,
    },
    rotateDirection: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    normalizedTooth() {
      return Math.ceil(this.tooth)
    },
    finalToothHeight() {
      // formula: (gear height)/2 + user defined toothHeight
      return this.height / 2 + this.toothHeight + 'px'
    },
    rotateDirectionClass() {
      return this.rotateDirection ? `rotate-${this.rotateDirection}` : ''
    },
  },
  methods: {
    rotateDegree(tooth, index) {
      let degreeInternal = 360 / tooth
      return index * degreeInternal
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/_all';

.gear-group {
  padding: 2rem;
  width: fit-content;
}

.gear {
  //API
  --border-color: black;
  --fill-color: white;

  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--border-color); //border color

  // overlay all teeth
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 50%;
    background-color: var(--fill-color); //fill-color
  }

  //animation common
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &.rotate-clockwise {
    animation-name: rotate-clockwise;
  }

  &.rotate-counterclockwise {
    animation-name: rotate-counterclockwise;
  }

  .sawtooth {
    //API
    --tooth-width: 15px;
    --tooth-height: 60px; // 100/2 + 10px
    --tooth-top: -10px; // -10px

    position: absolute;
    content: '';
    width: var(--tooth-width);
    height: var(--tooth-height);
    top: var(--tooth-top);
    left: 50%;
    transform: translateX(-50%);
    transform-origin: 50% 100%; // this element's bottom-center
    background-color: var(--fill-color); //fill-color
    border: 1px solid var(--border-color); //border-color
    border-radius: 5px;
  }
}

@keyframes rotate-clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-counterclockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
