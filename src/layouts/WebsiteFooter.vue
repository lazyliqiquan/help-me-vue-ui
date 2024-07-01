<script setup lang="ts">
import InfoBar from "./InfoBar.vue";
</script>

<template>
  <InfoBar/>
  <div class="footer" ref="div">
    <h1>LQQ & CPL</h1>
  </div>
</template>

<style scoped>
  .footer{
    width: 100%;
    height: 400px;
    padding: 20px;
    margin-top: 100px;
    background-color: black;
    align-items: center;
    justify-content: center;
    display: flex;
  }
</style>
