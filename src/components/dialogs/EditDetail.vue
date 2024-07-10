<script setup lang="ts">
import {useAppStore} from "../../store/app";
import {formatBytes} from "../../utils";

const appStore = useAppStore()


function parse(index: number): string {
  if (index == 1) {
    return `Number of words : ${appStore.edit.currentDocumentWords}`
  }
  return `Picture size : ${formatBytes(appStore.edit.currentPicturesSize)}`
}

// 字数、图片大小
</script>

<template>
  <div class="text-center">
    <VBtn @click="appStore.edit.getDocumentInfo(appStore.edit.originImageList)" icon="fas fa-info" variant="tonal"/>
    <!--    虽然我们没有设置editStore.activeEditDetail = false,但是这里是v-model，所以对话框消失，就相当于执行了前面的代码-->
    <v-dialog v-model="appStore.edit.activeEditDetail" width="auto">
      <v-card min-width="500">
        <VCardTitle>Restrictions</VCardTitle>
        <VCardText>
          <ul>
            <li
              v-for="(item,key) in appStore.edit.editRestrictions"
              :key="key"
              class="d-flex"
            >
              <div>
                <VIcon
                  size="7"
                  icon="fas fa-circle"
                  class="me-3"
                />
              </div>
              <span>{{ `${key} : ${item} ${key.includes('Picture') ? 'MB' : ''}` }}</span>
            </li>
          </ul>
        </VCardText>
        <VCardTitle>Content</VCardTitle>
        <VCardText>
          <ul>
            <li
              v-for="i in 2"
              :key="i"
              class="d-flex"
            >
              <div>
                <VIcon
                  size="7"
                  icon="fas fa-circle"
                  class="me-3"
                />
              </div>
              <span>{{ parse(i) }}</span>
            </li>
          </ul>
        </VCardText>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
