<script setup lang="ts">
import TopNavigationBar from "../layouts/TopNavigationBar.vue";
import PostTable from "../components/PostTable.vue";
import {router} from "../plugins/router";

function onCall() {
  router.push({
    path: '/middle-route', query: {
      content: 'sdasdsdsjd'
    }
  });
  // 路由
  // window.open('http://localhost:3003/middle-route?content=sjdjsdsdlskd','_blank')
  // const location = window.location
  // const url = location.protocol + '//' + location.host
  // alert(url)
  // 窗口大小
  // alert(`width : ${window.innerWidth} - height : ${window.innerHeight}`)
  console.log(window.location.protocol+'//'+window.location.host+'/');
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
