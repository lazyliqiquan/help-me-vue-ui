<script setup lang="ts">
const items = [
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me 2'},
]
</script>

<template>
  <VRow justify="start">
    <!--表示md及以上显示 md以下则不显示-->
    <VCol cols="auto" class="d-none d-md-block">
      <div class="text-h6">
        Give someone a rose to keep the fragrance
      </div>
    </VCol>
    <VCol cols="auto">
      <v-btn>
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
      <v-btn>
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
      <v-btn size="40" icon="fas fa-plus"/>
    </VCol>
  </VRow>
  <div style="height: 10px"/>
  <VDivider thickness="2" style="margin-bottom: 5px"/>
  <HelpCard/>

</template>

<style scoped>

</style>
