<script setup>
import { reactive, computed, ref, onMounted } from 'vue';
const itemsList = ref([])
let elementsData = ref([])

function onAddItemClick() {
  itemsList.value = [...itemsList.value,`ITEM ${itemsList.value.length+1}`]
  const parentElement = getElementDimensions('containing-dom-page-wrapper');
  const scrollParentElement = getElementDimensions('scroll-dom-wrapper');
  const bodyElement = getElementDimensions('body');
  const appElement = getElementDimensions('app');
  const scrollElement = getElementDimensions('scroll-container');
  // elementsData.value = [bodyElement, appElement, parentElement, scrollParentElement, scrollElement, ]
  // elementsData.value = [parentElement, scrollParentElement, scrollElement, ]
  elementsData.value = [ scrollParentElement, scrollElement ]
}

function getElementDimensions(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const computedStyles = getComputedStyle(element);

    return {
      key: elementId,
      height: elementRect.height,
      width: elementRect.width,
      display: computedStyles.display,
      overflowX: computedStyles.overflowX,
      overflowY: computedStyles.overflowY
    };
  }
  return {};
}
</script>

<template>
  <div class="scroll-dom-wrapper" id="scroll-dom-wrapper">
    <div class="scroll-container" id="scroll-container">
      <div v-for="item in itemsList" :key="item" class="item">
        {{ item }}
      </div>
    </div>
    <div>
      <div class="primary-button" @click="onAddItemClick">add item</div>
      <div class="data-list-wrapper">
        <div v-for="elementData in elementsData" :key="elementData.key" class="data-wrapper">
          <div class="head">{{ elementData.key }}</div>
          <dvi class="data">height: <span>{{elementData.height}}</span></dvi>
          <dvi class="data">width: <span>{{elementData.width}}</span></dvi>
          <dvi class="data">overflowX: <span>{{elementData.overflowX}}</span></dvi>
          <dvi class="data">overflowY: <span>{{elementData.overflowY}}</span></dvi>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-dom-wrapper {
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  .scroll-container {
    width: 100%;
    border: 2px solid $color-11;
    padding: 1rem;
    .item {
      width: 100%;
      height: 100px;
      border: 1px solid $border-1;
      background: $background-1;
      box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.02);
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      border-radius: 0.5rem;
    }
  }
  .data-list-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    .data-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border: 1px solid $border-1;
      background: $background-1;
      border-radius: 1rem;
      box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.02);
      padding: 0.75rem;
      .data {
        font-size: 1rem;
        span {
          font-size: 1rem;
          color: $color-4;
        }
      }
      .head {
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
        text-align: center;
        color: $color-10;
      }
    }
  }
  &.scroll-container-1 {
    display: flex;
    height: 100%;
    width: 100%;
  }
  &.scroll-container-2 {
    height: 100vh;
    width: 100%
  }
  &.scroll-container-3 {
    height: 50rem;
  }
}
</style>
