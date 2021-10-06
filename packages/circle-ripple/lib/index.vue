<template>
  <div
    class="circle-ripple"
    :style="{
      backgroundColor: backgroundColor,
      '--inner-ripple-ending-diameter': innerCircleEndingDiameter,
      '--outer-ripple-ending-diameter': outerCircleEndingDiameter,
    }"
  >
    <div
      class="circle-ripple-inner-circle animation infinite"
      :style="{
        width: innerCircleStartingDiameter,
        height: innerCircleStartingDiameter,
        borderColor: innerCircleBorderColor,
      }"
    />
    <div
      class="circle-ripple-outer-circle animation infinite"
      :style="{
        width: outerCircleStartingDiameter,
        height: outerCircleStartingDiameter,
        borderColor: outerCircleBorderColor,
      }"
    />
    <div class="circle-ripple-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MadCircleRipple',
  props: {
    innerCircleStartingDiameter: {
      type: String,
      default: '50px',
      required: false,
    },
    innerCircleEndingDiameter: {
      type: String,
      default: '400px',
      required: false,
    },
    innerCircleBorderColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.4)',
      required: false,
    },
    outerCircleStartingDiameter: {
      type: String,
      default: '120px',
      required: false,
    },
    outerCircleEndingDiameter: {
      type: String,
      default: '500px',
      required: false,
    },
    outerCircleBorderColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.5)',
      required: false,
    },
    backgroundColor: {
      type: String,
      default: 'black',
      required: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
@import '../../styles/utilities/animation';
@import '../../styles/utilities/background';
@import '../../styles/utilities/border';

.circle-ripple {
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  //default size
  width: 480px;
  height: 240px;

  border: 1px solid black;

  /* all direct child elements are absolute */

  &-outer-circle {
    position: absolute;
    //width: 120px;
    //height: 120px;
    border-width: 8px;
    border-style: solid;
    border-radius: 50%;

    &.animation {
      animation-name: outer-ripple;
      animation-duration: 1.5s;
      animation-timing-function: ease;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  &-inner-circle {
    position: absolute;
    //width: 50px;
    //height: 50px;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    z-index: 1;

    &.animation {
      animation-name: inner-ripple;
      animation-duration: 1.5s;
      animation-timing-function: ease;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  &-body {
    position: absolute;

    ::v-deep > * {
      color: white;
    }
  }

  // bind ending size to props
  --inner-ripple-ending-diameter: 400px;
  --outer-ripple-ending-diameter: 500px;
}

@keyframes inner-ripple {
  from {
  }

  to {
    width: var(--inner-ripple-ending-diameter);
    height: var(--inner-ripple-ending-diameter);
  }
}

@keyframes outer-ripple {
  from {
  }

  to {
    width: var(--outer-ripple-ending-diameter);
    height: var(--outer-ripple-ending-diameter);
  }
}
</style>
