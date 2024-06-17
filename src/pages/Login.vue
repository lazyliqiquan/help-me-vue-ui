<script setup lang="ts">
import {ref, watch} from "vue";
import {website} from "../settings/website";
import {router} from "../plugins/router";

const rememberMe = ref(false)
const isPasswordVisible = ref(false)
const loginType = ref(0)
const nameOrEmail = ref('')
const password = ref('')
const loginTypeIcons = ['fas fa-user', 'fas fa-envelope', 'fas fa-shield-virus']

watch(rememberMe, () => {
  localStorage.setItem('rememberMe', rememberMe.value.toString())
})

function login() {
  const status: string = verifyInput()
  if (status.length > 0) {

    return
  }
}

// 检查用户输入是否合法
function verifyInput(): string {
  if (nameOrEmail.value.length <= 0) {
    return 'The user name or email address cannot be empty'
  }
  if (nameOrEmail.value.length > website.nameOrEmailLength) {
    return `The length of the user name or email address cannot exceed ${website.nameOrEmailLength}`
  }
  if (nameOrEmail.value.includes(website.blankSpace)) {
    return 'The user name or email address cannot contain Spaces'
  }
  if (password.value.length <= 0) {
    return 'The password cannot be empty'
  }
  if (password.value.length > website.passwordLength) {
    return `The length of the password cannot exceed ${website.passwordLength}`
  }
  if (password.value.includes(website.blankSpace)) {
    return 'The password cannot contain Spaces'
  }
  return ''
}

// 从验证码组件获取验证码
function getAuthCode(authCode: string) {
  password.value = authCode
}

function toRegister() {
  router.push({path: '/register'})
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
            <CountDown v-else :getAuthCode="getAuthCode"/>
          </VCol>
          <VRow justify="space-between">
            <VCol cols="6">
              <VCheckbox
                v-model="rememberMe"
                label="Remember me"
              />
            </VCol>
            <VCol cols="6" align-self="center" style="margin-bottom: 20px">
              <v-btn variant="text" @click="router.push({path:'/find-password'})">find password</v-btn>
            </VCol>
          </VRow>
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
          <VCol
            cols="12"
            class="text-center text-base"
          >
            <span>You don't have an account yet?</span>
            <v-btn variant="text" @click="router.push({path:'/register'})">Create a account</v-btn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped>

</style>
