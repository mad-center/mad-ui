<template>
  <div
    class="grid"
    :style="{
      '--row': row,
      '--column': column,
      '--square-width': squareWidth,
      '--border-color': borderColor,
      '--background-color': backgroundColor,
    }"
  />
</template>

<script>
export default {
  name: 'MadGrid',
  props: {
    row: {
      type: Number,
      default: 5,
      required: false,
    },
    column: {
      type: Number,
      default: 10,
      required: false,
    },
    squareWidth: {
      type: String,
      default: '40px',
      required: false,
    },
    borderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.2)',
      required: false,
    },
    backgroundColor: {
      type: String,
      default: 'white',
      required: false,
    },
  },
}
</script>

<!--suppress CssInvalidFunction -->
<style scoped lang="scss">
.grid {
  // api
  --row: 5;
  --column: 10;
  --square-width: 40px;
  --border-color: rgba(0, 0, 0, 0.2);
  --background-color: white;

  // computed values
  --background-gradient-x-size: calc(var(--square-width) - 1px);
  --backgorund-x-size: var(--square-width);
  --backgorund-y-size: var(--square-width);

  width: calc(
    var(--square-width) * var(--column) + 1px
  ); // 401 =40*10 +1 border
  height: calc(var(--square-width) * var(--row) + 1px); // 201 =40*5 +1 border

  // hard code
  position: relative;
  box-sizing: border-box;

  border-width: 1px;
  border-style: solid;
  border-color: var(--border-color);
  background: linear-gradient(
      to bottom,
      transparent var(--background-gradient-x-size),
      var(--border-color) var(--background-gradient-x-size) var(--square-width)
    ),
    linear-gradient(
      to right,
      transparent var(--background-gradient-x-size),
      var(--border-color) var(--background-gradient-x-size) var(--square-width)
    ),
    var(--background-color);
  background-size: var(--backgorund-x-size) var(--backgorund-y-size);
}
</style>
