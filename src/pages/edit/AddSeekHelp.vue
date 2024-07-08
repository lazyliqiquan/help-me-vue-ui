<script setup lang="ts">
import {onMounted, ref} from "vue";
import useEdit from "../../hooks/useEdit";

const {beforeEdit} = useEdit();

const loading = ref(true);

onMounted(async () => {
  await beforeEdit({
    postType: 0,
    seekHelpId: 0,
    lendHandId: 0
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
