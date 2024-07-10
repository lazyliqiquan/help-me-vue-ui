<script setup lang="ts">
import {ref} from "vue";
import http from "../../utils/http";
import {useAppStore} from "../../store/app";
import useLogin from "../../hooks/useLogin";

const {isValidEmail} = useLogin()

const appStore = useAppStore();
//通过props的形式，将子组件的数据传递给父组件
const props = defineProps(['getAuthCode', 'email'])

// 验证码有效时间
// -2 正在发送请求中，等待后端的回复 展示一个无限滚动的环形进度
// -1 展示SEND CODE
// >=0 展示一个数字，表示验证码的有效剩余时间
const time = ref(-1)
let timer: NodeJS.Timeout = null
let code = 0
let msg = ''
let loading = false

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
  if (loading) {
    return
  }
  if (!isValidEmail(props.email)) {
    appStore.info.display('warning', 'Invalid mailbox')
    return
  }
  appStore.info.active = false
  time.value = -2
  loading = true
  await http.post('/send-code', {
    email: props.email,
  }).then(res => {
    code = res.data.code
    msg = res.data.msg
    if (res.data.code === 0) {
      time.value = res.data.data.ttl
      getTime()
    } else {
      time.value = -1
    }
  }).catch(err => {
    code = 1
    msg = err.toString()
    time.value = -1
  })
  appStore.info.display(code, msg)
  loading = false
}

</script>

<template>
  <VRow class="justify-center" align="center">
    <VCol cols="4" class="align-center justify-center">
      <VBtn block @click="sendCode" size="large">
        {{ time == -2 ? null : (time < 0 ? 'send code' : time) }}
        <v-progress-circular indeterminate v-if="time == -2"/>
      </VBtn>
    </VCol>
    <VCol cols="8">
      <v-otp-input @update:modelValue="props.getAuthCode"></v-otp-input>
    </VCol>
  </VRow>
</template>

<style scoped>

</style>
