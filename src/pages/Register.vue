<script setup lang="ts">
import {website} from "../settings/website";
import {ref} from "vue";
import {router} from "../plugins/router";
import useLogin from "../hooks/useLogin"
import http from "../utils/http";
import FullScreen from "../layouts/components/FullScreen.vue";
import {getDate} from "../utils";
import {useAppStore} from "../store/app";

const appStore = useAppStore();
const {verifyInput, isValidEmail} = useLogin()

const username = ref('')
const password = ref('')
const email = ref('')
const authCode = ref('')
let loading = false

async function register() {
  const err = verify()
  if (err.length > 0) {
    appStore.info.display('warning', err)
    return
  }
  if (loading) {
    return
  }
  loading = true
  await http.post('/register', {
    email: email.value,
    code: authCode.value,
    name: username.value,
    password: password.value,
    registerTime: getDate(),
  }).then(res => {
    appStore.info.display(res.data.code, res.data.msg)
  }).catch(err => {
    appStore.info.display('error', err.toString())
  })
  loading = false
}

// 从验证码组件获取验证码
function getAuthCode(code: string) {
  authCode.value = code
}

function verify(): string {
  if (authCode.value.length != website.authCodeLength) {
    return 'The verification code is incomplete'
  }
  if (!isValidEmail(email.value)) {
    return 'The email address is invalid'
  }
  let err = verifyInput(username.value, 'username', website.nameOrEmailLength)
  if (err.length > 0) {
    return err
  }
  err = verifyInput(password.value, 'password', website.passwordLength)
  if (err.length > 0) {
    return err
  }
  return verifyInput(email.value, 'email address', website.nameOrEmailLength)
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
              <CountDown :getAuthCode="getAuthCode" :email="email"/>
            </VCol>
            <VCol cols="12">
              <VBtn block @click="register">Register</VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </div>
  </FullScreen>
</template>

<style scoped>

</style>
