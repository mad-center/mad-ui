<template>
  <article v-html-prev="prevContent" v-html-next="nextContent" class="doc-page">
    <slot></slot>
  </article>
</template>
<script>
import marked from 'marked'

const renderer = new marked.Renderer()
renderer.heading = function heading(text, level) {
  return `<h${level} id="${text}">${text}</h${level}>`
}

// prevContent, value , nextContent
// splitContent[0] <!\\--code--> splitContent[1]
export default {
  name: 'MadDocPage',
  directives: {
    // https://v3.vuejs.org/guide/migration/custom-directives.html
    htmlPrev: {
      mounted(el, { value }) {
        el.insertAdjacentHTML('afterbegin', value)
      },
    },
    htmlNext: {
      mounted(el, { value }) {
        el.insertAdjacentHTML('beforeend', value)
      },
    },
  },
  computed: {
    content() {
      // example:
      // {"fullPath":"/elements/alert","hash":"","query":{},"name":"alert","path":"/elements/alert","params":{}
      const routePath = this.$route.path
      const routeName = this.$route.name
      // use $route to locate file
      // return require(`@${routePath}/${routeName}.md`)

      // WARNING!!!: below just a workaround
      // @ means website folder, then @/../website STILL means website folder
      // because only @ not Work
      return require(`@/../website${routePath}/${routeName}.md`)
    },
    splitContent() {
      return this.content.split('<!--code-->')
    },
    prevContent() {
      return marked(this.splitContent[0], { renderer })
    },
    nextContent() {
      const string = this.splitContent[1]
      return string ? marked(this.splitContent[1], { renderer }) : ''
    },
  },
}
</script>
<style lang="scss">
.doc-page {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h2,
  h3,
  h4,
  h5 {
    margin-top: 1.25rem;
  }

  pre,
  table,
  blockquote {
    margin-bottom: 1rem;
  }

  blockquote {
    padding: 1em;
    color: #6a737d;
    border-left: 0.25em solid #5b9bd8;

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }

  //table {
  //  width: 100%;
  //  overflow: auto;
  //  font-family: Consolas, Menlo, Monaco, 'Courier New', monospace, sans-serif;
  //
  //  thead {
  //    background-color: #f6f8fa;
  //  }
  //
  //  th {
  //    text-align: left;
  //  }
  //
  //  th,
  //  td {
  //    padding: 6px 12px;
  //    border: 1px solid #dfe2e5;
  //  }
  //
  //  code {
  //    font-family: inherit;
  //  }
  //}
}
</style>
