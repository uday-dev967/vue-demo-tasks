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
  // &.container-1 {
  //   display: grid;
  //   overflow: hidden;
  // }
  // &.container-2 {
  //   display: grid;
  // }
  // &.container-3 {
  //   overflow: hidden;
  // }
  // &.container-4 {
  //   display: flex;
  //   flex-direction: column;
  //   overflow: hidden;
  // }
  // &.container-5 {
  //   display: flex;
  //   flex-direction: column;
  // }
  
}
</style>
  display: flex;
      height: 100%;
      width: 100%;
  height: 100vh;
      width: 100%
  height: 50rem;