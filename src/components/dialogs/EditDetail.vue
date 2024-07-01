<script setup lang="ts">
import {ref} from "vue";
const dialog = ref(false)
const temp = ['','sdsdsadsa','sdsadsadsa']
</script>

<template>
  <div class="text-center">
    <VBtn @click="dialog = true" icon="fas fa-info" variant="tonal"/>
    <v-dialog v-model="dialog" width="auto">
      <v-card  min-width="500">
        <VCardTitle>Restrictions</VCardTitle>
        <VCardText>
          <ul>
            <li
              v-for="item in temp"
              :key="item"
              class="d-flex"
            >
              <div>
                <VIcon
                  size="7"
                  icon="fas fa-circle"
                  class="me-3"
                />
              </div>
              <span >{{ item }}</span>
            </li>
          </ul>
        </VCardText>
        <VCardTitle>Content</VCardTitle>
        <VCardText>
          <ul>
            <li
              v-for="item in temp"
              :key="item"
              class="d-flex"
            >
              <div>
                <VIcon
                  size="7"
                  icon="fas fa-circle"
                  class="me-3"
                />
              </div>
              <span >{{ item }}</span>
            </li>
          </ul>
        </VCardText>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>
