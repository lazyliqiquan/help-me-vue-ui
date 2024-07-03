<script setup lang="ts">
import FullScreen from "../layouts/components/FullScreen.vue";
import ArtText from "./macro/ArtText.vue";

const props = defineProps(['title', 'content', 'func','btnText']);

</script>

<template>
  <FullScreen>
    <div style="width: 550px;height: auto">
      <div style="margin-bottom: 10px;margin-left: 10px">
        <ArtText text="HELP ME"></ArtText>
      </div>
      <VCard>
        <VCardTitle>
          {{props.title ?? 'Operate fail'}}
        </VCardTitle>
        <VCardText opacity="0.5">
          <h3>{{ props.content}}</h3>
        </VCardText>
        <VCardItem>
          <VDivider thickness="2"></VDivider>
        </VCardItem>
        <VCardItem>
          <VRow justify="end">
            <VCol cols="auto">
              <VBtn variant="elevated" color="blue" @click="props.func">
                {{ props.btnText}}
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
