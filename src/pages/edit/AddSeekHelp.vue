<script setup lang="ts">
import http from "../../utils/http";
import {onMounted, ref} from "vue";
import {router} from "../../plugins/router";
import {useEditStore} from "../../store/edit";

const editStore = useEditStore();

const loading = ref(true);

onMounted(async () => {
  loading.value = false
  return
  await http.post('/before-edit', {
    postType: '0',
  }).then(res => {
    if (res.data.code === 0) {
      editStore.restrictions = res.data.data.map
    } else {
      router.replace({path: '/error', query: {content: res.data.msg}})
    }
  }).catch(err => {
    router.replace({path: '/error', query: {content: err.toString()}})
  })
  loading.value = false
})
</script>

<template>
  <Loading v-if="loading"/>
  <Editor v-if="!loading"/>
  <LeftEdit v-if="!loading"/>
</template>

<style scoped>

</style>
