<script setup lang="ts">
import {onMounted, ref} from "vue"
import {useAppStore} from "../store/app"

const appStore = useAppStore()
const loading = ref(false)
onMounted(async () => {
  await appStore.edit.beforeEdit()
})
</script>

<template>
  <Loading v-if="loading"/>
  <Editor v-else/>
  <LeftEdit v-if="!loading"/>
</template>

<style scoped>

</style>
