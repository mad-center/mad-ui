<template>
  <div
    class="inset-border"
    :class="[linedClass, ...animationClass]"
    :style="{
      backgroundImage: `url(${src})`,
    }"
  />
</template>

<script>
export default {
  name: 'MadInsetBorder',
  props: {
    lined: {
      type: Boolean,
      required: false,
    },
    src: {
      type: String,
      default: '',
      required: true,
    },
    width: {
      type: String,
      default: '320px',
      required: false,
    },
    height: {
      type: String,
      default: '180px',
      required: false,
    },
    animation: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return (
          ['', 'slide-up', 'slide-down', 'scale-down'].indexOf(value) !== -1
        )
      },
    },
  },
  computed: {
    linedClass() {
      return this.lined ? 'variant-lined' : ''
    },
    animationClass() {
      if (!this.animation) return []
      return ['animation', this.animation]
    },
  },
}
</script>

<style scoped lang="scss">
.inset-border {
  //background-image: url("//");
  height: 320px;
  width: 180px;

  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.5);

  &.variant-lined {
    box-shadow: none;
    outline: 1px solid white;
    outline-offset: -10px; /* use negative offset*/
  }

  &.animation {
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-fill-mode: both;

    &.background-slide-up {
      animation-name: background-slide-up;
    }

    &.background-slide-down {
      animation-name: background-slide-down;
    }

    &.background-scale-down {
      animation-name: background-scale-down;
    }
  }
}

@keyframes background-slide-up {
  from {
    background-position-y: 30px;
  }

  to {
    background-position-y: 0;
  }
}

@keyframes background-slide-down {
  from {
    background-position-y: -30px;
  }

  to {
    background-position-y: 0;
  }
}

@keyframes background-scale-down {
  from {
    background-size: 120% 120%;
  }

  to {
    background-size: 100% 100%;
  }
}
</style>
