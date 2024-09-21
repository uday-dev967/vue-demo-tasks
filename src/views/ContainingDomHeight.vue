<script setup>
import scrollDom from "../components/tasks/scrollDom.vue"

</script>

<template>
  <div class="containing-dom-page-wrapper">
    <scrollDom />
  </div>
</template>

<style scoped lang="scss">
.containing-dom-page-wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  overflow: hidden;
}
</style>
