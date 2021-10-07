<template>
  <h3>use cdn picture</h3>
  <mad-after-image
    :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
    :width="'500px'"
  >
  </mad-after-image>

  <h3>use local picture</h3>
  <mad-after-image
    :src="require('../../assets/3.jpg').default"
  ></mad-after-image>
</template>
