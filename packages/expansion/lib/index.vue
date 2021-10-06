<template>
  <div class="expansion">
    <div class="expansion-header">
      <p class="expansion-title">
        <slot name="header" />
      </p>
      <mad-icon @click="toggle">
        <i class="arrow" :class="[arrowDirectionClass]" />
      </mad-icon>
    </div>
    <div ref="expansionContainer" class="expansion-container">
      <div class="expansion-content">
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<script>
import MadIcon from '../../icon'

export default {
  name: 'MadExpansion',
  components: { MadIcon },
  data() {
    return {
      containerIsVisible: false,
    }
  },
  computed: {
    arrowDirectionClass() {
      return this.containerIsVisible ? 'up' : 'down'
    },
  },
  methods: {
    toggle() {
      // toggle content
      let container = this.$refs.expansionContainer
      if (container.style.maxHeight) {
        container.style.maxHeight = null
      } else {
        container.style.maxHeight = container.scrollHeight + 'px'
      }

      // toggle arrow direction
      this.containerIsVisible = !this.containerIsVisible
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/arrow.scss';

.expansion {
  padding: 0 1.5rem;
  line-height: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.3);

  &-header {
    display: flex;
    padding: 0.5rem 0;
  }

  &-title {
    width: 100%;
  }

  &-container {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  &-content {
    padding-bottom: 0.5rem;
  }

  .arrow {
    @include arrow-base();
    // css animation for direction change
    transition: transform 0.2s linear;

    &.up {
      @include arrow-direction($direction: up);
    }

    &.down {
      @include arrow-direction($direction: down);
    }
  }
}
</style>
