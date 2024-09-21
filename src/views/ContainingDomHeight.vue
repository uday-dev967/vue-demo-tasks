<script setup>
import scrollDom from "../components/tasks/scrollDom.vue"

const homeElement = document.getElementById('containing-dom-page-wrapper')


</script>

<template>
  <div class="containing-dom-page-wrapper" id="containing-dom-page-wrapper">
    <scrollDom />
  </div>
</template>

<style scoped lang="scss">
.containing-dom-page-wrapper {
  // height: 100%;
  width: 100%;
}
</style>