<script setup lang="ts">
import {useEditStore} from "../../store/edit";
import {ref} from "vue";
import {router} from "../../plugins/router";

const editStore = useEditStore();

function switchReadonly(): void {
  editStore.switchReadonly()
}

const dialog = ref(false)
</script>

<template>
  <div class="left-top">
    <div class="text-center">
      <VBtn @click="dialog = true" icon="fas fa-right-from-bracket" variant="tonal"
            style="transform: rotate(180deg);"></VBtn>
      <v-dialog v-model="dialog" width="auto">
        <v-card
          max-width="400"
          prepend-icon="fas fa-warning"
          text="After you exit the editing screen, the content will not be saved. Are you sure you want to exit."
          title="Dangerous operation"
        >
          <template v-slot:actions>
            <v-btn
              class="ms-auto"
              text="yes"
              color="error"
              @click="router.replace({path: '/home'})"
            />
            <v-btn
              class="ms-auto"
              color="success"
              text="no"
              @click="dialog = false"
            />
          </template>
        </v-card>
      </v-dialog>
    </div>

    <div style="height: 5px"></div>
    <VBtn @click="switchReadonly" :icon="`fas fa-lock${editStore.readonly ? '-open' :''}`" variant="tonal"/>
    <div style="height: 5px"></div>
    <VBtn @click="" icon="fas fa-pen-to-square" variant="tonal"></VBtn>
    <div style="height: 5px"></div>
    <VBtn @click="" icon="fas fa-info" variant="tonal"></VBtn>
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
