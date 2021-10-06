<template>
  <!--https://www.developintelligence.com/blog/2016/09/how-to-make-circularcurved-text-with-javascript/-->
  <div
    class="circular-text"
    :class="[rotateDirectionClass]"
    :style="{
      height: `${2 * radius}px`,
      color: color,
    }"
    v-html="circularTextFragments"
  />
</template>

<script>
export default {
  name: 'MadCircularText',
  props: {
    radius: {
      type: Number,
      default: 200,
      required: false,
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
    rotateDirection: {
      type: String,
      default: '',
      required: false,
    },
    color: {
      type: String,
      default: 'black',
      required: false,
    },
  },
  data() {
    return {
      circularTextFragments: '',
    }
  },
  computed: {
    rotateDirectionClass() {
      return this.rotateDirection ? `rotate-${this.rotateDirection}` : ''
    },
  },
  mounted() {
    // the more characters you have in your text, the larger the radius you’ll need to use
    this.circularText(this.text, this.radius)
  },
  methods: {
    circularText(text, radius) {
      text = text.split('')

      const deg = 360 / text.length
      let originalDegree = 0
      let fragments = ''

      // transform-origin: 0 100%; as rotate center point
      text.forEach((character) => {
        const characterFragment = `<p style='height:${radius}px;position:absolute;transform:rotate(${originalDegree}deg);transform-origin:0 100%'>${character}</p>`
        fragments += characterFragment
        originalDegree += deg
      })

      this.circularTextFragments = fragments
    },
  },
}
</script>

<style scoped lang="scss">
.circular-text {
  //height => 2* its radius px
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0;
  display: inline-block;

  // animation commons
  animation-iteration-count: infinite;
  animation-duration: 10s;
  animation-timing-function: linear;

  &.rotate-clockwise {
    animation-name: rotate-clockwise;
  }

  &.rotate-counterclockwise {
    animation-name: rotate-counterclockwise;
  }
}

@keyframes rotate-clockwise {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate-counterclockwise {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>
