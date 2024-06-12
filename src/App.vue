<template>
  <v-app>
    <RouterView/>
  </v-app>
</template>

<script setup>
import {ref} from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
