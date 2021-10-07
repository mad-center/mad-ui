<template>
  <h3>basic</h3>
  <mad-progress-bar></mad-progress-bar>

  <h3>with value</h3>
  <mad-progress-bar :value="40"></mad-progress-bar>

  <h3>custom max value</h3>
  <mad-progress-bar :max="200" :value="50"></mad-progress-bar>
</template>
