<template>
  <mad-menu size="small">
    <p class="menu-label">Elements</p>
    <ul class="menu-list">
      <li><a>Mad Alert</a></li>
      <li><a>Mad Block</a></li>
    </ul>
    <p class="menu-label">Components</p>
    <ul class="menu-list">
      <li><a>Mad Media</a></li>
      <li>
        <!--nested list-->
        <a>Nested List</a>
        <ul>
          <li><a class="state-active">Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Lorem ipsum dolor sit.</a></li>
        </ul>
      </li>
      <li><a>Lorem ipsum dolor.</a></li>
      <li><a>Lorem ipsum dolor sit amet.</a></li>
      <li><a>Lorem ipsum.</a></li>
    </ul>
    <p class="menu-label">Others</p>
    <ul class="menu-list">
      <li><a>A</a></li>
      <li><a>B</a></li>
      <li><a>C</a></li>
    </ul>
  </mad-menu>
</template>
