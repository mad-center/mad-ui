<template>
  <div class="mad-text" :class="[afterimageClass]">
    <p
      class="mad-text-body"
      :class="[quotationMarkClass, afterimageColorClass]"
      :data-afterimage="afterimageText"
    >
      <slot />
    </p>
  </div>
</template>

<script>
/**
 * stroke,fill,text-shadow,transparent-background,character splitter by random fontSize
 */
export default {
  name: 'MadText',
  props: {
    quotationMark: {
      type: Boolean,
      default: false,
      required: false,
    },
    afterimageColor: {
      type: String,
      default: '',
      required: false,
    },
    afterimageText: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    quotationMarkClass() {
      return this.quotationMark ? `quotation-mark` : ''
    },
    afterimageClass() {
      return this.afterimageText ? 'afterimage' : ''
    },
    afterimageColorClass() {
      return this.afterimageColor ? `afterimage-${this.afterimageColor}` : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/vars/derived-variables';

// afterimage colors
$text-afterimage-colors: (
  'black': $color-black,
  'white': $color-white,
  'red': $color-red-200,
  'green': $color-green-200,
  'blue': $color-blue-200,
) !default;

// quotation mark
.quotation-mark {
  &::before {
    content: '「';
  }

  &::after {
    content: '」';
  }
}

// afterimage
.afterimage {
  display: flex;
  justify-content: center;

  .mad-text-body {
    font-size: 1.5rem;
    position: relative;

    &::after {
      position: absolute;
      width: 100%;
      left: 0;
      z-index: -1;
      transform: scale(2);
      opacity: 0.3;
      content: attr(data-afterimage) '';
      color: black;
    }
  }

  @each $name, $color in $text-afterimage-colors {
    &-#{$name}:after {
      color: $color !important;
    }
  }
}
</style>
