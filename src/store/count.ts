import {defineStore} from "pinia";

export const useCountStore = defineStore('countStore', {
  // 真正存储数据的地方
  state() {
    return {
      sum: 6
    }
  },
})

/*
* 使用
* import {useCountStore} from '/store/count'
* const countStore = useCountStore
* countStore.sum //ref 已经是一个响应式的数据了
* */
