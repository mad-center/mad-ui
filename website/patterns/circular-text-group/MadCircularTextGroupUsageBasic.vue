<template>
  <mad-circular-text-group height="400px">
    <mad-circular-text
      :radius="100"
      text="This text makes a complete rotation "
      rotate-direction="clockwise"
    >
    </mad-circular-text>
    <mad-circular-text
      :radius="140"
      text="This text makes a complete rotation no matter how long it is. "
      rotate-direction="counterclockwise"
      color="red"
    >
    </mad-circular-text>
    <mad-circular-text
      :radius="180"
      text="This text makes a complete rotation no matter how long it is. "
      rotate-direction="clockwise"
    >
    </mad-circular-text>
  </mad-circular-text-group>
</template>
