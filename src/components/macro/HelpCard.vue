<script setup lang="ts">
import avatar from "@/assets/images/avatar.jpg"

let s = '的haod好的数ssssssssssssssss是独立是独都sdsdssdsds是独立是独s都'
</script>

<template>
  <div style="border-left: 5px solid green">
    <VRow dense align="center">
      <VCol>
        <VCard @click="" style="height: 60px" elevation="0">
          <div style="padding:5px">
            <VRow justify="start" align="center" dense>
              <VCol cols="auto">
                <VAvatar :image="avatar" rounded="0" style="width: 50px;height: 50px"/>
              </VCol>
              <VCol class="d-flex justify-start align-center">
                <h3 class="two-line-text " style="opacity: 0.7">{{ s }}</h3>
              </VCol>
            </VRow>
          </div>
        </VCard>
      </VCol>
      <VCol cols="auto" class="d-none d-md-block" >
        <VBtn icon="fas fa-circle-info" class="button-inner">
          <VIcon icon="fas fa-circle-info"></VIcon>
          <VMenu
            open-on-hover
            activator="parent"
            offset="15"
            max-width="400px"
            :close-on-content-click="false"
            transition="slide-y-reverse-transition"
            location="bottom end"
          >
            <VList >
              <VListItem link v-for="i in 4">
                <template #prepend>
                  <v-icon
                    class="me-2"
                    icon="fas fa-gear"
                    size="22"
                  />
                </template>
                <VListItemTitle>Settings</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </VBtn>
      </VCol>
    </VRow>
  </div>

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

.button-inner {
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  margin: 0;
  animation: anime 12s linear infinite;
  appearance: none;
  background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
  background-size: 600%;
  color: rgba(255, 255, 255, 90%);
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.43px;
  line-height: 1.2;
  min-inline-size: 50px;
  outline: 0;
  padding-block: 0.625rem;
  padding-inline: 1.25rem;
  text-decoration: none;
  text-transform: none;
  vertical-align: middle;
}

@keyframes anime {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
