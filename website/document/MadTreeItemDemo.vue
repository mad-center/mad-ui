<template>
  <mad-tree-item
    :item="componentTree"
    @click="clickNode($event)"
  ></mad-tree-item>
</template>

<script>
export default {
  name: 'MadTreeItemDemo',
  components: {},
  data() {
    return {
      componentTree: {
        id: 'components',
        text: '组件',
        children: [
          { id: 'divider', text: 'divider 分割线' },
          { id: 'treeitem', text: 'treeitem tree item' },
        ],
      },
    }
  },
  methods: {
    clickNode(node) {
      console.log('Click node:', node)
    },
  },
}
</script>

<style scoped></style>
