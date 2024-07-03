<script setup lang="ts">
// 2. 打开一个页面，出现错误
// 3. 路由不匹配
import {router} from "../plugins/router";
</script>

<template>
  <CenterCard
    :title="$route.query.title"
    :content="$route.query.content"
    :func="()=>router.replace({path:'/home'})"
    btnText="go home"/>
</template>

<style scoped>

</style>
