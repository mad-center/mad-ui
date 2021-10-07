<template>
  <!--respect ratio, fixed width-->
  <mad-image :src="src" :ratio="'16by9'" :width="'300px'"></mad-image>
  <hr />
  <!-- respect ratio, fixed height-->
  <mad-image :src="src" :ratio="'3by1'" :height="'200px'"></mad-image>
  <hr />
  <!-- respect ratio,fixed height and max-width-->
  <mad-image
    :src="src"
    :ratio="'16by9'"
    :height="'180px'"
    :max-width="'400px'"
  ></mad-image>
</template>

<script>
export default {
  name: 'MadImageUsageBasic',
  data() {
    return {
      src: require('../../assets/12.jpg').default,
    }
  },
}
</script>

<style scoped></style>
