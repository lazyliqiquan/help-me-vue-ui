<script setup lang="ts">
import {useEditStore} from "../../store/edit";
import {onMounted} from "vue";
import {router} from "../../plugins/router";
import {useRoute} from "vue-router";

const editStore = useEditStore();
onMounted(()=>{
  editStore.postType = 3
  const route = useRoute()
  console.log(route.params)
})
</script>

<template>

</template>

<style scoped>

</style>
