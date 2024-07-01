<script setup lang="ts">
import FullScreen from "../layouts/components/FullScreen.vue";
import ArtText from "./macro/ArtText.vue";


</script>

<template>
  <FullScreen>
    <div style="width: 550px;height: auto">
      <div style="margin-bottom: 10px;margin-left: 10px">
        <ArtText text="HELP ME"></ArtText>
      </div>
      <VCard>
        <VCardTitle>
          'Please note that the website you are about to go to is:'
        </VCardTitle>
        <VCardText opacity="0.5">
          <h3>{{ $route.query.url }}</h3>
        </VCardText>
        <VCardItem>
          <VDivider thickness="2"></VDivider>
        </VCardItem>
        <VCardItem>
          <VRow justify="end">
            <VCol cols="auto">
              <VBtn variant="elevated" color="blue" @click="window.location.href = <string>route.query.url">
                jump
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
