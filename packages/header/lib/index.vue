<template>
  <header class="header">
    <slot />
  </header>
</template>

<script>
export default {
  name: 'MadHeader',
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 1;
  background-color: white;

  ::v-deep .logo {
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    color: black;
    text-decoration: none;
    letter-spacing: 2px;
    transition: 0.5s;
  }

  ::v-deep ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;

      a {
        display: block;
        padding: 0.5rem 0.75rem;
        text-decoration: none;
        color: black;
        letter-spacing: 2px;
        font-weight: 500;
      }
    }
  }
}
</style>
