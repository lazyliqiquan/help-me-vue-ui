<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useEditStore} from "../../store/edit";

const editStore = useEditStore();

onMounted(() => {
  console.log(editStore.restrictions)
})

const contentKeys = ['Number of words', 'Picture size']

function test() {
  editStore.activeEditDetail = true
  const images = editStore.quill.root.querySelectorAll('img')
  let totalMemory = 0;
  images.forEach(img => {
    // todo img就是获取到底dom实例，可以直接修改他的样式
    // img.setAttribute('width','100px')
    // img.setAttribute('height','auto')
    const base64String = img.src.split(',')[1];
    // console.log(base64String)
    const byteLength = (base64String.length * 3) / 4 - (base64String.indexOf('=') > 0 ? base64String.length - base64String.indexOf('=') : 0);
    totalMemory += byteLength;
  })
  // console.log(totalMemory)
}

// 字数、图片大小
</script>

<template>
  <div class="text-center">
    <VBtn @click="test" icon="fas fa-info" variant="tonal"/>
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
              <span>{{ `${key} : ${item}` }}</span>
            </li>
          </ul>
        </VCardText>
        <VCardTitle>Content</VCardTitle>
        <VCardText>
          <ul>
            <li
              v-for="item in contentKeys"
              :key="item"
              class="d-flex"
            >
              <div>
                <VIcon
                  size="7"
                  icon="fas fa-circle"
                  class="me-3"
                />
              </div>
              <span>{{ editStore.quill.getText() === '\n' ? 0 : editStore.quill.getText().length }}</span>
            </li>
          </ul>
        </VCardText>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
