<script setup lang="ts">
import {ref} from "vue";
import http from "../../utils/http";

// 验证码有效时间
// -2 正在发送请求中，等待后端的回复 展示一个无限滚动的环形进度
// -1 展示SEND CODE
// >=0 展示一个数字，表示验证码的有效剩余时间
const time = ref(-1)
let timer: NodeJS.Timeout = null
const code = ref(0)
const msg = ref('')
const showSnackbar = ref(false)

function getTime() {
  timer && clearTimeout(timer)
  if (time.value < 0) {
    return
  }
  timer = setTimeout(() => {
    time.value--
    getTime()
  }, 1000)
}

async function sendCode() {
  showSnackbar.value = false
  time.value = -2
  await http.post('/send-code', {
    email: '2754294620@qq.com',
  }).then(res => {
    code.value = res.data.code
    msg.value = res.data.msg
    if (res.data.code === 0) {
      time.value = res.data.data.ttl
      getTime()
    } else {
      time.value = -1
    }
  }).catch(err => {
    code.value = 1
    msg.value = err.toString()
    time.value = -1
  }).finally(() => {
    showSnackbar.value = true
    setTimeout(() => {
      showSnackbar.value = false
    }, 10000)
  })
}
</script>

<template>
  <VRow class="justify-center" align="center">
    <VCol cols="4" class="align-center justify-center">
      <VBtn block @click="sendCode" size="large">
        {{ time == -2 ? null : (time < 0 ? 'send code' : time) }}
        <v-progress-circular indeterminate v-if="time == -2"/>
      </VBtn>
      <v-snackbar
        v-model="showSnackbar"
        :color="code == 0 ? 'success' : 'red-lighten-2' "
        variant="outlined"
      >
        {{ msg }}
        <template v-slot:actions>
          <v-btn
            :color="code == 0 ? 'green' : 'pink'"
            variant="text"
            @click="showSnackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </VCol>
    <VCol cols="8">
      <v-otp-input></v-otp-input>
    </VCol>
  </VRow>
</template>

<style scoped>

</style>
