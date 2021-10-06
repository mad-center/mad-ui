<script>
import { colorMapValues } from '../../utils/validator'
import { h } from 'vue'

export default {
  name: 'MadTable',
  props: {
    color: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        return [...colorMapValues].indexOf(value) !== -1
      },
    },
    narrow: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullwidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    horizontalLined: {
      type: Boolean,
      required: false,
      default: false,
    },
    borderless: {
      type: Boolean,
      required: false,
      default: false,
    },
    striped: {
      type: Boolean,
      required: false,
      default: false,
    },
    hoverable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    colorClass() {
      if (!this.color) return ''
      return `color-${this.color}`
    },
    narrowClass() {
      if (!this.narrow) return ''
      return 'variant-narrow'
    },
    fullwidthClass() {
      if (!this.fullwidth) return ''
      return 'variant-fullwidth'
    },
    horizontalLinedClass() {
      if (!this.horizontalLined) return ''
      return 'variant-horizontal-lined'
    },
    borderlessClass() {
      if (!this.borderless) return ''
      return 'variant-borderless'
    },
    stripedClass() {
      if (!this.striped) return ''
      return 'variant-striped'
    },
    hoverableClass() {
      if (!this.hoverable) return ''
      return 'variant-hoverable'
    },
    classes() {
      return [
        this.colorClass,
        this.narrowClass,
        this.fullwidthClass,
        this.horizontalLinedClass,
        this.borderlessClass,
        this.stripedClass,
        this.hoverableClass,
      ].map((value, index, array) => {
        return value ? this.$style[value] : ''
      })
    },
  },
  methods: {
    createTable() {
      return h(
        'table',
        {
          // use $style module
          class: ['table', ...this.classes],
        },
        this.$slots.default()
      )
    },
  },
  render() {
    return h('div', { class: ['table-container'] }, this.createTable())
  },
}
</script>

<style module lang="scss">
@import '../../styles/mixins/all';

$table-color: $color-black !default;
$table-background-color: $color-white !default;

$table-cell-border: 1px solid $border !default;
$table-cell-padding: 0.5em 0.75em !default;
$table-cell-padding-narrow: 0.25em 0.5em !default;

$table-striped-row-even-background-color: $color-gray-100 !default;
$table-striped-row-even-hover-background-color: $color-gray-200 !default;

$table-color-map: $color-map !default;

table {
  border-collapse: collapse;
  @include block();

  // basic color contrast
  background-color: $table-background-color;
  color: $table-color;

  // default border style
  // th and td
  th,
  td {
    border: $table-cell-border;
    padding: $table-cell-padding;
  }

  // colors
  @each $name, $pair in $table-color-map {
    $color: nth($pair, 1);
    $color-invert: nth($pair, 2);
    &.color-#{$name} {
      background-color: $color;
      color: $color-invert;

      // override th and td border style
      th,
      td {
        border-color: $color;
      }
    }
  }

  // below is variants

  // dense
  &.variant-narrow {
    th,
    td {
      padding: $table-cell-padding-narrow;
    }
  }

  // striped
  &.variant-striped {
    tr {
      border-width: 1px 0;

      &:nth-child(even) {
        background-color: $table-striped-row-even-background-color;
      }
    }
  }

  // hoverable
  &.variant-hoverable {
    tr:hover {
      background-color: $table-striped-row-even-hover-background-color;
    }
  }

  // Horizontal lined
  &.variant-horizontal-lined {
    th,
    td {
      border-width: 1px 0;
    }
  }

  // fullwidth
  &.variant-fullwidth {
    width: 100%;
  }

  // no border
  &.variant-borderless {
    th,
    td {
      border: none;
    }
  }

  //TODO container scrollbar
  // max-width: 100% and overflow x/y attrs
  // custom scrollbar
}
</style>
