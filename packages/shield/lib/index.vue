<template>
  <div class="shield">
    <span class="shield-title">{{ title }}</span>
    <span class="shield-content">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: 'MadShield',
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
    content: {
      type: [String, Number],
      default: '',
      required: false,
    },
  },
}
</script>

<style scoped lang="scss">
.shield {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.75rem;
  padding: 0.5em 0.75em;
  margin-bottom: 0.5em;

  &-title {
    line-height: 1.2;
    padding: 2px 4px;
    border-radius: 3px 0 0 3px;
    color: #fff;
    background: #606060;
  }

  &-content {
    line-height: 1.2;
    padding: 2px 4px;
    border-radius: 0 3px 3px 0;
    color: #fff;
    background: #2082bf;
  }
}
</style>
