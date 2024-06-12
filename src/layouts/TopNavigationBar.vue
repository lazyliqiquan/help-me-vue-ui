<script setup lang="ts">

import UserProfile from "./components/UserProfile.vue";
</script>

<template>
  <v-app-bar elevation="1" density="comfortable" class="px-3">
    <v-btn to="/">
      <h2>Help me</h2>
    </v-btn>
    <VSpacer/>
    <UserProfile/>
  </v-app-bar>
</template>

<style scoped>

</style>
