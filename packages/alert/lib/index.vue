<template>
  <div class="mad-alert" :class="[alertVariantClass]">
    <p v-if="showTitle" class="alert-title">
      {{ capitalize(title) || upperCase(type) }}
    </p>
    <p class="alert-content">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MadAlert',
  props: {
    type: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        return (
          ['info', 'success', 'warning', 'danger', ''].indexOf(value) !== -1
        )
      },
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    content: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    alertVariantClass() {
      if (!this.type) return ''
      return `alert-${this.type}`
    },
    /**
     * show title when either title or type is not empty
     * @return {String}
     */ showTitle() {
      return this.title || this.type
    },
  },
  methods: {
    upperCase(text) {
      return text.toUpperCase()
    },
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1)
    },
  },
}
</script>

<style lang="scss">
@import '../../styles/mixins/all';

$alert-padding-horizontal: 1.5rem;
$alert-padding-vertical: 0.5rem;

$alert-border-left-width: 0.5rem;
$alert-border-left-style: solid;

$alert-margin-horizontal: 0;
$alert-margin-vertical: 1rem;

$alert-default-border-color: #6d6565;
$alert-default-background-color: #f8f8f8;

$alert-title-margin-vertical: 1em;
$alert-title-margin-horizontal: 0;

$alert-content-margin-vertical: 1em;
$alert-content-margin-horizontal: 0;

$alert-color-variants: (
  'info': $info,
  'success': $success,
  'warning': $warning,
  'danger': $danger,
) !default;

.mad-alert {
  position: relative;
  padding: $alert-padding-vertical $alert-padding-horizontal;
  border-left-width: $alert-border-left-width;
  border-left-style: $alert-border-left-style;
  margin: $alert-margin-vertical $alert-margin-horizontal;

  // default color
  border-color: $alert-default-border-color;
  background-color: $alert-default-background-color;

  // color variants
  @each $name, $color in $alert-color-variants {
    &.alert-#{$name} {
      border-color: $color;
      background-color: rgba($color, 0.1);
    }
  }

  // title
  &-title {
    // 0.4 =current line height(1.6) - default line height(1.2)
    margin: $alert-title-margin-vertical $alert-title-margin-horizontal -0.4em;
    font-weight: 600;
    line-height: 1.6;
  }

  // content
  &-content {
    margin: $alert-content-margin-vertical $alert-content-margin-horizontal;
  }
}
</style>
