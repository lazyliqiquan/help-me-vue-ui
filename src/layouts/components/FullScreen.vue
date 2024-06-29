<script setup lang="ts">

</script>

<template>
  <div class="full-screen-component">
    <slot/>
  </div>
</template>

<style scoped>
.full-screen-component {
  height: 100vh; /* 设置高度为视口高度 */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
