<script setup lang="ts">
import {ref} from "vue";
import {website} from "../settings/website";
import {router} from "../plugins/router";
import useLogin from "../hooks/useLogin"
import http from "../utils/http";
import {useInfoStore} from "../store/info";

const infoStore = useInfoStore();

const {verifyInput, isValidEmail} = useLogin()
const isPasswordVisible = ref(false)
const loginType = ref(0)
const nameOrEmail = ref('')
const password = ref('')
const loginTypeIcons = ['fas fa-user', 'fas fa-envelope', 'fas fa-shield-virus']
let loading = false

async function login() {
  const errMsg: string = verify()
  if (errMsg.length > 0) {
    infoStore.display('warn', errMsg)
    return
  }
  if (loading) {
    return
  }
  loading = true
  await http.post('/login', {
    loginType: loginType.value.toString(),
    nameOrMail: nameOrEmail.value,
    authCode: password.value
  }).then(res => {
    if (res.data.code === 0) {
      localStorage.setItem('token', res.data.data.token)
    }
    infoStore.display(res.data.code, res.data.msg)
  }).catch(err => {
    infoStore.display('error', err.toString())
  })
  loading = false
}

// 验证用户输入
function verify(): string {
  if (loginType.value == 2 && password.value.length < 6) {
    return 'The verification code is incomplete'
  }
  if (loginType.value > 0 && !isValidEmail(nameOrEmail.value)) {
    return 'The email address is invalid'
  }
  const errMsg: string = verifyInput(password.value,
    loginType.value < 2 ? 'password' : 'verification code',
    loginType.value < 2 ? website.passwordLength : website.authCodeLength)
  if (errMsg.length > 0) {
    return errMsg
  }
  return verifyInput(nameOrEmail.value,
    loginType.value == 0 ? 'username' : 'email address',
    website.nameOrEmailLength)
}

// 从验证码组件获取验证码
function getAuthCode(authCode: string) {
  password.value = authCode
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="450"
    >
      <VCardItem class="justify-center">
        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          Help Me
        </VCardTitle>
      </VCardItem>


      <VCardText>
        <VRow dense>
          <VCol cols="12" align="center">
            <VBtnGroup>
              <VBtn v-for="(icon,i) in loginTypeIcons" :key="icon" :icon="icon" variant="outlined"
                    :active="loginType == i" @click="loginType = i"></VBtn>
            </VBtnGroup>
          </VCol>

          <!-- email -->
          <VCol cols="12">
            <VTextField
              v-model="nameOrEmail"
              :label="loginType == 0 ? 'Name' : 'Email'"
              :counter="website.nameOrEmailLength"
            />
          </VCol>

          <!-- password -->
          <VCol cols="12">
            <VTextField
              v-if="loginType < 2"
              v-model="password"
              label="Password"
              :counter="website.passwordLength"
              :type="isPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="isPasswordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'"
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
            />
            <CountDown v-else :getAuthCode="getAuthCode" :email="nameOrEmail"/>
          </VCol>

          <!-- login button -->
          <VCol cols="12">
            <VBtn
              block
              @click="login"
            >
              Login
            </VBtn>
          </VCol>
          <!-- create account -->
          <VCol cols="12" style="margin-top: 15px">
            <VRow justify="space-between">
              <VCol
                cols="6"
                class="text-center text-base"
              >
                <v-btn variant="text" @click="router.push({path:'/register'})">Create a account</v-btn>
              </VCol>
              <VCol cols="6" align-self="center" style="margin-bottom: 20px">
                <v-btn variant="text" @click="router.push({path:'/find-password'})">find password</v-btn>
              </VCol>
            </VRow>
          </VCol>

        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped>

</style>
