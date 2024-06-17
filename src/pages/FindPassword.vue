<script setup lang="ts">
import {router} from "../plugins/router";
import {website} from "../settings/website";
import {ref} from "vue";

const email = ref('')
const authCode = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

function verifyInput(): string {
  if (newPassword.value.length <= 0) {
    return 'The password cannot be empty'
  }
  if (newPassword.value.length > website.passwordLength) {
    return `The password cannot exceed ${website.passwordLength} characters`
  }
  if (newPassword.value.includes(website.blankSpace)) {
    return 'The password cannot contain Spaces'
  }
  if (newPassword.value !== confirmPassword.value) {
    return 'The passwords entered before and after are inconsistent'
  }
  if (email.value.length <= 0) {
    return 'The email address cannot be empty'
  }
  if (email.value.length > website.nameOrEmailLength) {
    return `The email address cannot exceed ${website.nameOrEmailLength} characters`
  }
  if (email.value.includes(website.blankSpace)) {
    return 'The email address cannot contain Spaces'
  }
  return ''
}

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
          Find Password
        </VCardTitle>
      </VCardItem>
      <VCardText>
        <VRow dense>
          <VCol cols="12">
            <VTextField
              v-model="newPassword"
              label="New Password"
              :counter="website.passwordLength"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="confirmPassword"
              label="Confirm Password"
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
            <VBtn block>Modify</VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped>

</style>
