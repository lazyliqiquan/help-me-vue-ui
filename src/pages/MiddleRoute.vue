<script setup lang="ts">
//中间页面的几种情况
// 1. 跳转到其他页面前的确认操作
// 2. 打开一个页面，出现错误
// 3. 路由不匹配
import FullScreen from "../layouts/components/FullScreen.vue";
import ArtText from "../components/macro/ArtText.vue";
import {useRoute} from "vue-router";
import {router} from "../plugins/router";

const route = useRoute()

function jump() {
  if (route.query.hasOwnProperty('title')) {
    router.replace({path: '/home'})
  } else {
    window.location.href = <string>route.query.content
  }
}
</script>

<template>
  <FullScreen>
    <div style="width: 550px;height: auto">
      <div style="margin-bottom: 10px;margin-left: 10px">
        <ArtText text="HELP ME"></ArtText>
      </div>
      <VCard>
        <VCardTitle>
          {{ $route.query.title ?? 'Please note that the website you are about to go to is:' }}
        </VCardTitle>
        <VCardText opacity="0.5">
          <h3>{{ $route.query.content }}</h3>
        </VCardText>
        <VCardItem>
          <VDivider thickness="2"></VDivider>
        </VCardItem>
        <VCardItem>
          <VRow justify="end">
            <VCol cols="auto">
              <VBtn variant="elevated" color="blue" @click="jump">
                {{ route.query.hasOwnProperty('title') ? 'go home' : 'jump' }}
              </VBtn>
            </VCol>
          </VRow>
        </VCardItem>
      </VCard>
    </div>
  </FullScreen>
</template>

<style scoped>

</style>
