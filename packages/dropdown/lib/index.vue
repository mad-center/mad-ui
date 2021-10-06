<template>
  <div
    class="dropdown"
    :class="[hoverableClass, stateActiveClass, alignmentClass]"
  >
    <div class="dropdown-trigger" @click="toggleStateActive">
      <slot name="dropdown-trigger" />
    </div>
    <div class="dropdown-content">
      <slot name="dropdown-content" />
    </div>
  </div>
</template>

<script>
/**
 * An interactive dropdown menu for discoverable content
 */
export default {
  name: 'MadDropdown',
  props: {
    hoverable: {
      type: Boolean,
      default: true,
      required: false,
    },
    controlByJs: {
      type: Boolean,
      default: false,
      required: false,
    },
    alignment: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return ['', 'left', 'right'].indexOf(value) !== -1
      },
    },
  },
  data() {
    return {
      // the class is for users who want to control the display of the dropdown with JavaScript
      stateActive: false,
    }
  },
  computed: {
    hoverableClass() {
      if (this.controlByJs) return ''
      return this.hoverable ? 'hoverable' : ''
    },
    stateActiveClass() {
      return this.stateActive ? 'state-active' : ''
    },
    alignmentClass() {
      return this.alignment ? `alignment-${this.alignment}` : ''
    },
  },
  methods: {
    toggleStateActive() {
      if (this.controlByJs) {
        this.stateActive = !this.stateActive
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/_all';

.dropdown {
  position: relative;
  display: inline-flex;

  ::v-deep &-content {
    display: none;
    top: 100%;
    position: absolute;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;

    .dropdown-item {
      color: black;
      padding: 0.75rem 1rem;
      text-decoration: none;
      display: block;
      // item text no wrap for alignment
      white-space: nowrap;

      &:hover {
        background-color: $light;
      }
    }
  }

  //show the dropdown content on hover or js
  &.state-active,
  &.hoverable:hover {
    .dropdown-content {
      display: block;
    }
  }

  //alignment
  &.alignment-right {
    .dropdown-content {
      left: auto;
      right: 0;
    }
  }

  // default alignment left
  &.alignment-left {
    .dropdown-content {
      left: 0;
      right: auto;
    }
  }
}

//arrow
::v-deep .arrow {
  @include arrow-base();

  &.down {
    @include arrow-direction($direction: down);
  }
}
</style>
