<template>
  <!--  https://v3.vuejs.org/guide/transitions-enterleave.html#javascript-hooks-->
  <transition v-on="on">
    <slot></slot>
  </transition>
</template>

<script>
import { addClass, removeClass } from '../../utils/dom'

const COLLAPSE_TRANSITION_CLASS = 'mad-collapse-transition'

/**
 * use transition to encapsulate container animation/transition
 *
 * copy implementation from element-plus.git\packages\transition\collapse-transition\index.vue
 */
export default {
  name: 'MadCollapseTransition',
  methods: {
    on: {
      beforeEnter(el) {
        addClass(el, COLLAPSE_TRANSITION_CLASS)
        if (!el.dataset) el.dataset = {}

        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom

        el.style.height = '0' //0px
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      },

      enter(el) {
        el.dataset.oldOverflow = el.style.overflow
        if (el.scrollHeight !== 0) {
          el.style.height = el.scrollHeight + 'px'
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        } else {
          el.style.height = '' //reset to initial
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        }

        el.style.overflow = 'hidden'
      },

      afterEnter(el) {
        // for safari: remove class then reset height is necessary
        removeClass(el, COLLAPSE_TRANSITION_CLASS)
        el.style.height = '' //reset to initial
        el.style.overflow = el.dataset.oldOverflow
      },

      beforeLeave(el) {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.dataset.oldOverflow = el.style.overflow

        el.style.height = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
      },

      leave(el) {
        if (el.scrollHeight !== 0) {
          // for safari: add class after set height, or it will jump to zero height suddenly, weired
          addClass(el, COLLAPSE_TRANSITION_CLASS)
          // in vue3.0.4, transitionProperty is set 'none' to avoid 'v-leave-from' issue
          el.style.transitionProperty = 'height'
          el.style.height = 0
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        }
      },

      afterLeave(el) {
        removeClass(el, COLLAPSE_TRANSITION_CLASS)
        el.style.height = '' //reset to initial
        el.style.overflow = el.dataset.oldOverflow
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      },
    },
  },
}
</script>

<style lang="scss">
.mad-collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
}
</style>
