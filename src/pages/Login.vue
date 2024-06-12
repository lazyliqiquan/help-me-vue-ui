<script setup lang="ts">
import {ref} from "vue";

const rememberMe = ref(false)
const isPasswordVisible = ref(false)
const loginType = ref(0)
const nameOrEmail = ref('')
const password = ref('')
const loginTypeIcons = ['fas fa-user', 'fas fa-envelope', 'fas fa-shield-virus']

function switchLoginType(index: number): void {
  loginType.value = index
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
                    :active="loginType == i" @click="switchLoginType(i)"></VBtn>
            </VBtnGroup>
          </VCol>

          <!-- email -->
          <VCol cols="12">
            <VTextField
              v-model="nameOrEmail"
              :label="loginType == 0 ? 'Name' : 'Email'"
            />
          </VCol>

          <!-- password -->
          <VCol cols="12">
            <VTextField
              v-if="loginType < 2"
              v-model="password"
              label="Password"
              :type="isPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="isPasswordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'"
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
            />
            <CountDown v-else/>
          </VCol>

          <VCol cols="12">
            <!-- remember me checkbox -->
            <div class="d-flex align-center justify-space-between flex-wrap">
              <VCheckbox
                v-model="rememberMe"
                label="Remember me"
              />
            </div>

            <!-- login button -->
            <VBtn
              block
              type="submit"
            >
              Login
            </VBtn>
          </VCol>

          <!-- create account -->
          <VCol
            cols="12"
            class="text-center text-base"
          >
            <span>New on our platform?</span>
            <RouterLink
              class="text-primary ms-2"
              to="/register"
            >
              Create an account
            </RouterLink>
          </VCol>

          <!-- auth providers -->
          <VCol
            cols="12"
            class="text-center"
          >
            <AuthProvider/>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped>

</style>
