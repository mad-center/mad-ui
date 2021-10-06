<template>
  <h1>hello playground...</h1>
  <mad-button :tag="'a'" disabled>a disabled</mad-button>
  <mad-button :tag="'a'">a</mad-button>
  <mad-button :tag="'input'" type="submit" value="submit button"></mad-button>
</template>

<script>
import MadButton from '@mad-ui/button'

export default {
  name: 'Playground',
  components: {
    MadButton,
  },
}
</script>

<style lang="scss"></style>
