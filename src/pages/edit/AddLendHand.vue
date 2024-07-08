<script setup lang="ts">
import {useEditStore} from "../../store/edit";
import {onMounted} from "vue";

const editStore = useEditStore();

onMounted(() => {
  editStore.postType = 1
})
</script>

<template>
  <Editor/>
  <LeftEdit/>
</template>

<style scoped>

</style>
