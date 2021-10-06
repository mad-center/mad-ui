<template>
  <div class="code-block">
    <div class="code-show">
      <slot />
    </div>
    <div class="code-info">
      <strong class="code-title">{{ title }}</strong>
      <slot name="desc" />
      <a class="code-toggle" @click="toggleCode"> code </a>
    </div>
    <div ref="codeContent" class="code-content">
      <pre><code
ref="code"
                 class="lang-html"
      >{{ code }}</code></pre>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  name: 'MadCodeBlock',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    code: {
      type: String,
      default: '',
      required: true,
    },
  },
  mounted() {
    hljs.highlightBlock(this.$refs.code)
  },
  methods: {
    toggleCode() {
      let codeContent = this.$refs.codeContent
      //  if already expended, then collapse
      // console.log(codeContent.style.maxHeight)
      if (codeContent.style.maxHeight) {
        codeContent.style.maxHeight = null
      } else {
        // if collapsed, then expand
        codeContent.style.maxHeight = codeContent.scrollHeight + 'px'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.code-block {
  margin-bottom: 25px;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}

.code-show {
  padding: 20px 30px;
}

.code-info {
  position: relative;
  margin-top: 20px;
  padding: 20px 30px;
  line-height: 1.6;
  border-top: 1px solid #e8e8e8;

  p {
    margin: 5px 0;
  }
}

.code-title {
  position: absolute;
  top: -12px;
  left: 36px;
  padding: 0 12px;
  line-height: 22px;
  font-size: 15px;
  background: #fff;
}

.code-toggle {
  position: absolute;
  bottom: 10px;
  right: 8px;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
  }
}

.code-content {
  max-height: 0;
  overflow-y: hidden;
  overflow-x: auto;
  transition: max-height 0.3s ease-out;

  pre {
    margin-bottom: 0;
    padding: 0;
  }

  .hljs {
    padding: 18px 30px;
    line-height: 1.5;
    font-size: 0.875em;
    font-weight: 400;
    font-family: Consolas, Helvetica, Arial, sans-serif;
  }
}
</style>
