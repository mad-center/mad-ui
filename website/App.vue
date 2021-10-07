<template>
  <div class="app-content">
    <header class="header">mad-ui | {{ this.$route.path }}</header>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list-item">
          <router-link to="/" class="nav-list-item-link">Home</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/about" class="nav-list-item-link"
            >About
          </router-link>
        </li>
        <mad-tree-item
          v-for="(tree, index) in trees"
          :key="tree.id || index"
          class="nav-list-item"
          :item-css-classes="['nav-list-item-link']"
          :item="tree"
          @click="clickNode($event)"
        >
        </mad-tree-item>
      </ul>
    </nav>
    <main class="main">
      <div class="page">
        <router-view />
      </div>
      <!-- toc-->
    </main>
  </div>
</template>

<script>
import {
  components,
  elements,
  formElements,
  layout,
  patterns,
  plugins,
  views,
} from './router/routes'

export default {
  components: {
    // MadTreeItem,
  },
  computed: {
    trees() {
      return [
        this.elementTree,
        this.componentTree,
        this.formTree,
        this.layoutTree,
        this.patternTree,
        this.pluginTree,
        this.viewTree,
      ]
    },
    // refactor XXX tree code to method. too messy
    elementTree() {
      let els = {
        id: 'elements',
        text: '元素',
        children: elements.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return els
    },
    componentTree() {
      let comps = {
        id: 'components',
        text: '组件',
        children: components.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return comps
    },
    formTree() {
      let form = {
        id: 'form',
        text: '表单',
        children: formElements.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return form
    },
    layoutTree() {
      let layoutTree = {
        id: 'layout',
        text: '布局',
        children: layout.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return layoutTree
    },
    patternTree() {
      let patternTree = {
        id: 'patterns',
        text: '模式',
        children: patterns.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return patternTree
    },
    pluginTree() {
      let pluginTree = {
        id: 'plugins',
        text: '插件',
        children: plugins.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return pluginTree
    },
    viewTree() {
      let viewTree = {
        id: 'views',
        text: '视图',
        children: views.map((item) => ({
          id: item.name,
          text: item.text, // i18n zh_CN text
        })),
      }
      return viewTree
    },
  },
  methods: {
    clickNode(node) {
      // change router
      if (node.id) {
        this.$router.push({ name: node.id })
      }
    },
  },
}
</script>

<style lang="scss">
@import '../packages/styles/base/_all';

// use this way to import 3rd-party css
@import './../node_modules/highlight.js/styles/github.css';

// make header fixed
.nav {
  position: fixed;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  width: 16rem;
  z-index: 10;
  margin: 0;
  font-size: 1rem;
  background-color: #fff;
  border-right: 1px solid #eaecef;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none;
  }
}

.main {
  padding-left: 16rem;
  padding-bottom: 2rem;
  display: block;
}

.page {
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.nav-list {
  list-style: none;

  &-item {
    list-style: none;

    &-link {
      display: block;
      padding: 0.75rem 1rem;
      color: black;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      // vue router link style
      &.router-link-active,
      &.router-link-exact-active {
        background-color: rgba(0, 0, 0, 0.05);
        border-right: rgba(0, 0, 0, 0.5) solid 2px;
      }
    }
  }
}

.header {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 3.6rem;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
}
</style>
