<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useEditStore} from "../../store/edit";

const editStore = useEditStore();
const dialog = ref(false)

onMounted(() => {
  console.log(editStore.restrictions)
})

const contentKeys = ['Number of words', 'Picture size']

function test() {
  dialog.value = true
  // const text = editStore.quill.getText();
  // alert(text.length);
  // alert(editStore.quill.getContents().toString())
}

// 字数、图片大小
</script>

<template>
  <div class="text-center">
    <VBtn @click="test" icon="fas fa-info" variant="tonal"/>
    <v-dialog v-model="dialog" width="auto">
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
              <span>{{ editStore.quill.getText().length }}</span>
            </li>
          </ul>
        </VCardText>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
