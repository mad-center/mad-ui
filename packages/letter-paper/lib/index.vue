<template>
  <div
    class="letter-paper"
    :style="{
      transform: transform,
    }"
  >
    <slot />
  </div>
</template>

<script>
/**
 * slot mode: just copy text to here and use `<pre>` wrapper
 *
 * think: how to custom font-size. chrome BUG?
 */
export default {
  name: 'MadLetterPaper',
  props: {
    noBackground: {
      type: Boolean,
      default: false,
      required: false,
    },
    transform: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/_all';

.letter-paper {
  /* default: 16px * line-height = 24px = bg line gap*/
  --background-y-size: 1.5rem; //= (paragraph font-size) * (paragraph line-height) px
  --background-y-gradient-size: calc(1.5rem - 1px); // 23px
  --line-height: 1.5;
  --min-line-height: 1.5em; //same as line-height, computed

  margin: 0 auto;
  padding: 0 1.25rem;
  width: 640px;
  background: linear-gradient(
    transparent var(--background-y-gradient-size),
    black var(--background-y-size)
  );
  background-size: 100% var(--background-y-size);
  font-size: 1rem;
  transform-origin: center center;

  // basic style
  ::v-deep p,
  ::v-deep pre,
  ::v-deep &-paragraph {
    margin: 0;
    font-family: inherit;
    line-height: var(--line-height);
    min-height: var(--min-line-height);
  }
}

// optimize readability
// don't use this for english, only use this for other language such as chinese or japanese
::v-deep {
  .letter-spacing {
    letter-spacing: 0.1rem;
  }

  .text-indent {
    text-indent: 2em; /*every p indent 2 key word*/
  }

  .align-right {
    text-align: right;
  }
}
</style>
