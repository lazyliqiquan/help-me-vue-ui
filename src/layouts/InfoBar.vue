<script setup lang="ts">
  import {useInfoStore} from "../store/info";
  const infoStore = useInfoStore();
</script>

<template>
  <RouterView/>
  <v-snackbar
    v-model="infoStore.showSnackbar"
    :color="infoStore.status"
    variant="outlined"
    :timeout="-1"
  >
    {{ infoStore.msg }}
    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="infoStore.conceal()"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>

</style>
