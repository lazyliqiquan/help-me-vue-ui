<script setup lang="ts">
import {website} from "../settings/website";
import {ref} from "vue";
import {router} from "../plugins/router";

const username = ref('')
const password = ref('')
const email = ref('')
const authCode = ref('')

// 从验证码组件获取验证码
function getAuthCode(code: string) {
  authCode.value = code
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="450">
      <VCardItem class="justify-start">
        <template #prepend>
          <VBtn icon="fas fa-arrow-left" @click="router.replace({path:'/login'})"/>
        </template>
        <VCardTitle class="font-weight-semibold text-2xl">
          Register
        </VCardTitle>
      </VCardItem>
      <VCardText>
        <VRow dense>
          <VCol cols="12">
            <VTextField
              v-model="username"
              label="Name"
              :counter="website.nameOrEmailLength"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              :counter="website.passwordLength"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
              :counter="website.nameOrEmailLength"
            />
          </VCol>
          <VCol cols="12">
            <CountDown :getAuthCode="getAuthCode"/>
          </VCol>
          <VCol cols="12">
            <VBtn block>Register</VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped>

</style>
