<script>
import { sizes } from '../../utils/validator'
import { h } from 'vue'

/**
 * sizes
 *
 * separator
 *
 * alignment
 */
export default {
  name: 'MadBreadcrumb',
  props: {
    alignment: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return ['', 'centered', 'right'].indexOf(value) !== -1
      },
    },
    size: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...sizes].indexOf(value) !== -1
      },
    },
    separator: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return ['', 'arrow'].indexOf(value) !== -1
      },
    },
  },
  computed: {
    alignmentClass() {
      return this.alignment ? `alignment-${this.alignment}` : ''
    },
    sizeClass() {
      return this.size ? `size-${this.size}` : ''
    },
    separatorClass() {
      return this.separator ? `separator-${this.separator}` : ''
    },
    classes() {
      return [
        'breadcrumb',
        this.alignmentClass,
        this.sizeClass,
        this.separatorClass,
      ].map((value) => {
        return value ? this.$style[value] : ''
      })
    },
  },
  render() {
    return h(
      'nav',
      {
        class: [...this.classes],
        'aria-label': 'breadcrumbs',
      },
      this.$slots.default()
    )
  },
}
</script>

<style module lang="scss">
@import '../../styles/mixins/_all';

$breadcrumb-item-color: $link !default;
$breadcrumb-item-hover-color: $link-hover !default;
$breadcrumb-item-active-color: $link-active !default;

$breadcrumb-item-padding-vertical: 0 !default;
$breadcrumb-item-padding-horizontal: 0.75em !default;

$breadcrumb-item-separator-color: $link-light !default;

.breadcrumb {
  @include block();
  font-size: $size-normal;
  white-space: nowrap;

  ul,
  ol {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;
    line-height: 1.2;

    & + li::before {
      color: $breadcrumb-item-separator-color;
      content: '\0002f';
    }

    // the last child li(a) link will be current active link
    &:last-child {
      a {
        color: $breadcrumb-item-active-color;
        pointer-events: none;
      }
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: $breadcrumb-item-color;
    padding: $breadcrumb-item-padding-vertical
      $breadcrumb-item-padding-horizontal;

    &:hover {
      color: $breadcrumb-item-hover-color;
    }
  }

  // Alignment
  &.alignment-centered {
    ol,
    ul {
      justify-content: center;
    }
  }

  &.alignment-right {
    ol,
    ul {
      justify-content: flex-end;
    }
  }

  // Sizes
  &.size-small {
    font-size: $size-small;
  }

  &.size-medium {
    font-size: $size-medium;
  }

  &.size-large {
    font-size: $size-large;
  }

  // Separators
  &.separator-arrow {
    li + li::before {
      // https://unicode-table.com/cn/1433/
      content: '\1433';
    }
  }
}
</style>
