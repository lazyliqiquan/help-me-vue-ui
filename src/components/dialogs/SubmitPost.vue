<script setup lang="ts">
import {ref} from "vue";
import {useAppStore} from "../../store/app";
import {website} from "../../settings/website";

const appStore = useAppStore()
const dialog = ref(false)
const tag = ref('')

function addTags() {
  if (appStore.edit.addTag(tag.value)) {
    tag.value = ''
  }
}

// 是否显示选择悬赏金组件
function isShowSelectReward(): boolean {
  return appStore.edit.postType == 0 || appStore.edit.postType == 1
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
              <VTextField v-model="appStore.edit.title" label="Title" :maxLength="website.postTitleLength"/>
            </VCol>
            <VCol :cols="isShowSelectReward ? 8 : 12">
              <VTextField
                v-model="tag"
                label="Tags"
                :maxLength="website.singleTagLength"
                @keydown.enter="addTags"/>
            </VCol>
            <VCol cols="4" v-if="isShowSelectReward">
              <v-select
                :items="Array.from({length:appStore.edit.editRestrictions.remainReward},(_,i)=>i+1)"
                label="Reward"
                v-model="appStore.edit.reward"
                :readonly="true"
              ></v-select>
            </VCol>
            <VCol cols="12">
              <VChipGroup v-if="appStore.edit.tags.length > 0" dense>
                <VChip v-for="(item,index) in appStore.edit.tags" :key="item" closable
                       @click:close="appStore.edit.tags.splice(index, 1)">
                  {{ item }}
                </VChip>
              </VChipGroup>
              <h4 v-else style="opacity: 0.7">Empty tags</h4>
            </VCol>
          </VRow>
        </VCardText>
        <VDivider thickness="2"/>
        <VBtn height="50" @click="appStore.edit.submitPost">Submit</VBtn>
      </VCard>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
