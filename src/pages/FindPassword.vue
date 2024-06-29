<script setup lang="ts">
import {router} from "../plugins/router";
import {website} from "../settings/website";
import {ref} from "vue";
import useLogin from "../hooks/useLogin"
import http from "../utils/http";
import {useInfoStore} from "../store/info";
import FullScreen from "../layouts/components/FullScreen.vue";

const infoStore = useInfoStore();

const {verifyInput, isValidEmail} = useLogin()
const email = ref('')
const authCode = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
let loading = false

async function findPassword() {
  const err = verify()
  if (err.length > 0) {
    infoStore.display('warning', err)
    return
  }
  if (loading) {
    return
  }
  loading = true
  await http.post('/find-password', {
    email: email.value,
    code: authCode.value,
    password: newPassword.value,
  }).then(res => {
    infoStore.display(res.data.code, res.data.msg)
  }).catch(err => {
    infoStore.display('error', err.toString())
  })
  loading = false
}


function verify(): string {
  if (authCode.value.length != website.authCodeLength) {
    return 'The verification code is incomplete'
  }
  if (!isValidEmail(email.value)) {
    return 'The email address is invalid'
  }
  if (newPassword.value !== confirmPassword.value) {
    return 'The two entered passwords are inconsistent'
  }
  let err = verifyInput(newPassword.value, 'new password', website.passwordLength)
  if (err.length > 0) {
    return err
  }
  err = verifyInput(confirmPassword.value, 'confirm password', website.passwordLength)
  if (err.length > 0) {
    return err
  }
  return verifyInput(email.value, 'email address', website.nameOrEmailLength)
}

function getAuthCode(code: string) {
  authCode.value = code
}
</script>

<template>
  <FullScreen>
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
              <CountDown :getAuthCode="getAuthCode" :email="email"/>
            </VCol>
            <VCol cols="12">
              <VBtn block @click="findPassword">Modify</VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </div>
  </FullScreen>
</template>

<style scoped>

</style>
