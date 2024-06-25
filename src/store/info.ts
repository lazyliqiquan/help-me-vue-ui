import {defineStore} from "pinia";

export const useInfoStore = defineStore('infoStore', {
  actions: {
    conceal() {
      this.showSnackbar = false
    },
    display(status: string|number, msg: string) {
      this.showSnackbar = true
      if(typeof status === 'number'){
        this.status = status == 0 ? 'success' : 'error'
      }else{
        this.status = status
      }
      this.msg = msg
    }
  },
  // 真正存储数据的地方
  state() {
    return {
      showSnackbar: false,
      status: '',
      msg: ''
    }
  },
})
