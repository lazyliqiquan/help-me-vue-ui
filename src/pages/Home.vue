<script setup lang="ts">
import TopNavigationBar from "../layouts/TopNavigationBar.vue";
import PostTable from "../components/PostTable.vue";

function onCall() {
  alert(`width : ${window.innerWidth} - height : ${window.innerHeight}`)
}
</script>

<template>
  <TopNavigationBar/>
  <v-main>
    <v-container>
      <v-sheet
        min-height="70vh"
        rounded="lg"
        style="padding: 20px;display: flex;flex-direction: column;"
      >
        <PostTable :is-public="true" :is-seek-help="true"/>
      </v-sheet>
    </v-container>
  </v-main>
  <v-fab icon="fas fa-search" @click="onCall"/>
</template>

<style scoped>

</style>
