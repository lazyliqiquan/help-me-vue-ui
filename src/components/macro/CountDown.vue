<script setup lang="ts">
import {onMounted, ref} from "vue";

const time = ref(-1)
onMounted(() => {
  setInterval(() => {
    time.value--
  }, 1000)
})
</script>

<template>
  <VRow class="justify-center" align="center">
    <VCol cols="4" class="align-center justify-center">
      <VBtn block> {{ time < 0 ? 'send code' : time }}</VBtn>
    </VCol>
    <VCol cols="8">
      <v-otp-input></v-otp-input>
    </VCol>
  </VRow>
</template>

<style scoped>

</style>
