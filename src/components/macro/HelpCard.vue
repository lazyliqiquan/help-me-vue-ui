<script setup lang="ts">
import avatar from "@/assets/images/avatar.jpg"

const helpIcons = ['check', 'pause']
const helpColors = ['green', 'orange']
let s = '的haod好的数据都数据都是独立数据都是独立数据都是独立数据都sdsdsdsdsassssssssssssssssss是独立是独都sdsdssdsds是独立是独s都'
</script>

<template>
  <VCard @click="" style="height: 60px" elevation="0">
    <div style="padding:5px">
      <VRow justify="start" align="center" dense>
        <VCol cols="auto">
          <VAvatar :image="avatar" rounded="0" style="width: 50px;height: 50px"/>
        </VCol>
        <VCol cols="auto">
          <VIcon icon="fas fa-pause" color="orange"/>
        </VCol>
        <VCol class="d-flex justify-start align-center">
          <h3 class="two-line-text " style="opacity: 0.7">{{ s }}</h3>
        </VCol>
        <VCol cols="auto" class="d-none d-md-block " >
          <VRow dense class="d-flex justify-center">
            <VCol cols="12">
              <VIcon icon="fas fa-sack-xmark" size="small" />
            </VCol>
            <VCol cols="12"><h4 style="white-space: pre"> 1</h4></VCol>
          </VRow>
        </VCol>
        <VCol cols="auto" class="d-none d-md-block ">
          <VRow dense class="d-flex justify-center">
            <VCol cols="12">
              <VIcon icon="fas fa-heart" size="small" />
            </VCol>
            <VCol cols="12"><h4 style="white-space: pre">1k</h4></VCol>
          </VRow>
        </VCol>
      </VRow>
    </div>


  </VCard>
  <VDivider style="margin-top: 10px;margin-bottom: 10px"/>

</template>

<style scoped>
.two-line-text {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em; /* Approximate height for two lines */
  padding: 0 1em;
}
</style>
