<script setup lang="ts">
import http from "../../utils/http";
import {onMounted, ref} from "vue";
import {router} from "../../plugins/router";

onMounted(async () => {
  await http.post('/before-edit', {
    postType: '0',
  }).then(res => {
    if (res.data.code === 0) {

    } else {
      router.replace('/middle')
    }
  }).catch(err => {

  })
})
</script>

<template>
  <Editor/>
  <LeftEdit/>
</template>

<style scoped>

</style>
