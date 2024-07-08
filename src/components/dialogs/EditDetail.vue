<script setup lang="ts">
import {useEditStore} from "../../store/edit";
import useEdit from "../../hooks/useEdit";
import Quill from "Quill";
import {formatBytes} from "../../utils";

const {calculateAllImageSize} = useEdit()
const editStore = useEditStore();


// 获取当前文档的字数以及图片大小
function getDocumentInfo() {
  editStore.activeEditDetail = true
  editStore.currentPicturesSize = calculateAllImageSize(<Quill>editStore.quill, editStore.post.imageInfoList)
  editStore.currentDocumentWords = editStore.quill.getText().length
}

function parse(index: number): string {
  if (index == 1) {
    return `Number of words : ${editStore.currentDocumentWords}`
  }
  return `Picture size : ${formatBytes(editStore.currentPicturesSize)}`
}

// 字数、图片大小
</script>

<template>
  <div class="text-center">
    <VBtn @click="getDocumentInfo" icon="fas fa-info" variant="tonal"/>
    <!--    虽然我们没有设置editStore.activeEditDetail = false,但是这里是v-model，所以对话框消失，就相当于执行了前面的代码-->
    <v-dialog v-model="editStore.activeEditDetail" width="auto">
      <v-card min-width="500">
        <VCardTitle>Restrictions</VCardTitle>
        <VCardText>
          <ul>
            <li
              v-for="(item,key) in editStore.restrictions"
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
