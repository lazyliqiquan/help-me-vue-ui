<script setup lang="ts">
import {useEditStore} from "../../store/edit";
import {onMounted} from "vue";

const editStore = useEditStore();
onMounted(() => {
  editStore.postType = 2
})
</script>

<template>

</template>

<style scoped>

</style>
