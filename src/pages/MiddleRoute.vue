<script setup lang="ts">
//中间页面的几种情况
// 1. 跳转到其他页面前的确认操作
import {useRoute} from "vue-router";

function jump() {
  window.location.href = <string>useRoute().query.url
}
</script>

<template>
  <CenterCard
    title="Please note that the website you are about to go to is:"
    :content="$route.query.url"
    :func="jump"
    btnText="jump"/>
</template>

<style scoped>

</style>
