<script setup lang="ts">
import {useAppStore} from "../store/app"

const appStore = useAppStore()
</script>

<template>
  <RouterView/>
  <v-snackbar
    v-model="appStore.info.active"
    :color="appStore.info.status"
    variant="outlined"
    :timeout="-1"
  >
    {{ appStore.info.msg }}
    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="appStore.info.active = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>

</style>
