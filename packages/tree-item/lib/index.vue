<template>
  <li>
    <component
      :is="'a'"
      class="tree-item"
      :class="[
        { bold: isFolder },
        itemCssClasses,
        { 'state-active': item.id === $route.name },
      ]"
      @click="toggle"
    >
      <span class="tree-item-text">{{ item.text }}</span>
      <span v-if="isFolder" class="tree-item-toggle">{{
        isOpen ? '-' : '+'
      }}</span>
    </component>

    <mad-collapse-transition>
      <ul v-show="isOpen" v-if="isFolder" class="tree-item-list">
        <mad-tree-item
          v-for="(child, index) in item.children"
          :key="child.id || index"
          :item="child"
          :item-css-classes="itemCssClasses"
          @click="onClick($event, child)"
        />
      </ul>
    </mad-collapse-transition>
  </li>
</template>

<script>
import MadCollapseTransition from '../../collapse-transition'

export default {
  name: 'MadTreeItem',
  components: { MadCollapseTransition },
  // https://v3.vuejs.org/guide/migration/v-on-native-modifier-removed.html
  props: {
    item: {
      type: Object,
      required: true,
      default: function () {
        return {}
      },
    },
    itemCssClasses: {
      type: [String, Array],
      required: false,
      default: '',
    },
    isHighlight: {
      type: Function,
      required: false,
      default: function (node) {
        return false
      },
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    isFolder() {
      return this.item.children && this.item.children.length
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    onClick($event, node) {
      // console.log('$event', $event)
      // console.log('node', node)
      // stop native click propagation
      $event.stopPropagation()
      // fire custom click event up
      this.$emit('click', node)
    },
  },
}
</script>

<style scoped lang="scss">
li,
ul {
  list-style: none;
}

.tree-item {
  position: relative;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &-text {
    width: 100%;
  }

  &-toggle {
    display: inline-block;
    justify-self: end;
  }

  &-list {
    background-clip: padding-box;
    padding-left: 1rem;
  }

  // state active style
  &.state-active {
    background-color: rgba(0, 0, 0, 0.05);
    border-right: rgba(0, 0, 0, 0.5) solid 2px;
  }
}

.bold {
  font-weight: bold;
}
</style>
