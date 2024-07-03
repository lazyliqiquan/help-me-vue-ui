<script setup lang="ts">

</script>

<template>
  <v-container class="loading-container" fluid>
    <v-row align="center" justify="center" class="fill-height">
      <v-col class="text-center">
        <v-progress-circular
          :size="70"
          :width="7"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <h2 class="loading-text">Loading, please wait...</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.loading-container {
  background: linear-gradient(to right, #ff6e7f, #bfe9ff);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-text {
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
