<script setup lang="ts">

</script>

<template>
  <div class="left-top">
  <VBtn icon="fas fa-add" variant="tonal"></VBtn>
    <div style="height: 5px"></div>
    <VBtn icon="fas fa-add" variant="tonal"></VBtn>
  </div>
</template>

<style scoped>
.left-top {
  position: fixed;
  top: 70px;
  left: 5px;
  width: 100px;
  display: grid;
  grid-template-rows: repeat(3, auto); /* 定义三行，行高根据内容自动调整 */
  justify-items: center; /* 水平居中对齐子元素 */
  align-items: center; /* 垂直居中对齐子元素 */
}
</style>
