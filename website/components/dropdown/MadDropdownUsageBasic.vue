<template>
  <mad-dropdown class="margin-bottom-300">
    <template #dropdown-trigger>
      <mad-button aria-controls="dropdown-content">
        <span>Dropdown button</span>
        <mad-icon><i class="arrow down"></i></mad-icon>
      </mad-button>
    </template>
    <template #dropdown-content>
      <a href="#" class="dropdown-item"> Dropdown item </a>
      <a class="dropdown-item"> Other dropdown item </a>
      <a href="#" class="dropdown-item"> dropdown item </a>
      <a href="#" class="dropdown-item"> Other dropdown item with long text</a>
      <hr />
      <a href="#" class="dropdown-item"> With a divider </a>
      <div class="dropdown-item">div container item</div>
    </template>
  </mad-dropdown>
</template>

<style scoped lang="scss">
.margin-left-300 {
  margin-left: 300px;
}

.margin-bottom-300 {
  margin-bottom: 300px;
}
</style>
