<script setup lang="ts">
import {ref} from "vue";

const dialog = ref(false)
const title = ref('')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const select = ref(1)
const tag = ref('')
const tags = ref([])
function input() {
  if(tag.value.trim().length > 0 && tags.value.length < 3){
    tags.value.unshift(tag.value)
    tag.value = ''
  }
}
function removeTag(index: number) {
  tags.value.splice(index, 1)
  alert(tags.value.length)
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
            <VCol cols="6">
              <VTextField v-model="tag" label="tags" @keydown.enter="input"/>
            </VCol>
            <VCol cols="6">
              <v-select
                :items="numbers"
                label="select reward"
                v-model="select"
              ></v-select>
            </VCol>
            <VCol cols="12">
              <VChipGroup v-if="tags.length > 0" dense>
                <VChip v-for="(item,index) in tags" closable @click:close="removeTag(index)">
                  {{item}}
                </VChip >
              </VChipGroup>
              <h4 v-else style="opacity: 0.7">Post tags</h4>
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
