<script setup lang="ts">
import {useEditStore} from "../../store/edit";
import {onMounted, ref} from "vue";


const editStore = useEditStore();

function switchReadonly(): void {
  editStore.switchReadonly()
}

</script>

<template>
  <div class="left-top">
    <VBtn @click="switchReadonly" :icon="`fas fa-lock${editStore.readonly ? '-open' :''}`" variant="tonal"/>
    <div style="height: 5px"></div>
    <SubmitPost :is-seek-help="true"/>
    <div style="height: 5px"></div>
    <EditDetail/>
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
