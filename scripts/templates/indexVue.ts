export default ({packageName}: { packageName: string },
                {packageNameCamelCase}: { packageNameCamelCase: string }): string => {
    // console.log({packageName, packageNameCamelCase})
    return `<template>
  <div class="mad-${packageName}">
    <!-- your html -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Mad${packageNameCamelCase}",
  props: {},
  setup() {
    // your code
  },
});
</script>

<style scoped>
.mad-${packageName} {
  /* your style */
}
</style>
`;
};
