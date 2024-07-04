<script setup lang="ts">
import {ref} from "vue";
import {useEditStore} from "../../store/edit";

const editStore = useEditStore();

const dialog = ref(false)
const title = ref('')
// const maxReward = editStore.restrictions.maxReward
const rewardList = function (){
  editStore.restrictions.reward
}
const numbers = editStore
const reward = ref(1)
const tag = ref('')
const tags = ref([])

function input() {
  if (tag.value.trim().length > 0 && tags.value.length < 3) {
    tags.value.unshift(tag.value)
    tag.value = ''
  }
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
            <VCol cols="8">
              <VTextField v-model="tag" label="Tags" @keydown.enter="input"/>
            </VCol>
            <VCol cols="4">
              <v-select
                :items="numbers"
                label="Reward"
                v-model="reward"
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
