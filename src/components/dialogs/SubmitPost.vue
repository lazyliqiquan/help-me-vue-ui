<script setup lang="ts">
import {ref} from "vue";
import {useEditStore} from "../../store/edit";

const editStore = useEditStore()
const dialog = ref(false)
const title = ref('')
const selectReward = ref(1)
const tag = ref('')
const tags = ref([])

// 将输入框中的内容添加到标签集合中
function input() {
  if (tag.value.trim().length > 0 && tags.value.length < 3) {
    tags.value.unshift(tag.value)
    tag.value = ''
  }
}

// 上传帖子
function submitPost() {
//  上传帖子之前，肯定要先收集帖子的麻
}

</script>

<template>
  <div class="text-center">
    <VBtn @click="dialog = true" icon="fas fa-pen-to-square" variant="tonal"/>
    <v-dialog v-model="dialog" width="auto">
      <VCard width="600">
        <VCardTitle>Post Configuration</VCardTitle>
        <VCardText>
          <VRow dense>
            <VCol cols="12">
              <VTextField v-model="title" label="Title"/>
            </VCol>
            <VCol :cols="editStore.restrictions.remainReward > 0 ? 8 : 12">
              <VTextField v-model="tag" label="Tags" @keydown.enter="input"/>
            </VCol>
            <VCol cols="4" v-if="editStore.restrictions.remainReward > 0">
              <v-select
                :items="Array.from({length:editStore.restrictions.remainReward},(_,i)=>i+1)"
                label="Reward"
                v-model="selectReward"
              ></v-select>
            </VCol>
            <VCol cols="12">
              <VChipGroup v-if="tags.length > 0" dense>
                <VChip v-for="(item,index) in tags" :key="item" closable @click:close="tags.splice(index, 1)">
                  {{ item }}
                </VChip>
              </VChipGroup>
              <h4 v-else style="opacity: 0.7">Empty tags</h4>
            </VCol>
          </VRow>
        </VCardText>
        <VDivider thickness="2"/>
        <VBtn height="50">Submit</VBtn>
      </VCard>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
