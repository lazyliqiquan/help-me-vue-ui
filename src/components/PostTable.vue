<script setup lang="ts">

import {router} from "../plugins/router";
import http from "../utils/http";

const props = defineProps(['isSeekHelp', 'isPublic'])

const items = [
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me 2'},
]
const icons = ['fas fa-angle-left']

</script>
<template>
  <div style="flex: 1">
    <VRow justify="start">
      <!--表示md及以上显示 md以下则不显示-->
      <VCol cols="auto" class="d-none d-md-block">
        <div class="text-h6">
          Give someone a rose to keep the fragrance
        </div>
      </VCol>
      <VCol cols="auto">
        <VRow v-if="props.isPublic">
          <VCol cols="auto">
            <v-btn variant="tonal">
              Sort
              <v-menu activator="parent">
                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          </VCol>
          <VCol cols="auto">
            <v-btn variant="tonal">
              filter
              <v-menu activator="parent">
                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          </VCol>
          <VCol cols="auto">
            <v-btn size="40" variant="tonal" @click="router.push({path:'/edit'})">
              <VIcon icon="fas fa-plus"/>
              <v-tooltip activator="parent" location="top">
                Seek help
              </v-tooltip>
            </v-btn>
          </VCol>
        </VRow>
        <VBtnGroup v-else>
          <VBtn v-for="i in 2" icon="fas fa-add" active variant="outlined"></VBtn>
        </VBtnGroup>
      </VCol>
    </VRow>
    <div style="height: 10px"/>
    <VDivider thickness="2" style="margin-bottom: 5px"/>
    <HelpCard/>
  </div>
  <div>
    <VRow justify="start" dense align="center">
      <VCol>
        <VBtn v-for="i in 4" icon="fas fa-angle-left" variant="text"></VBtn>
      </VCol>
      <VCol cols="auto">
        1 of 10 pages
      </VCol>
    </VRow>
  </div>

</template>

<style scoped>
</style>
