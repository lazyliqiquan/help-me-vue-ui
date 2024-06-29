<script setup lang="ts">
  const props = defineProps(['text'])
</script>

<template>
  <div class="art-text-shadow">
    {{props.text}}
  </div>
</template>

<style scoped>
.art-text-shadow {
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 3px 3px 0 #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
}
</style>
