import {defineStore} from "pinia";

export const useEditStore = defineStore('editStore', {
  actions: {
    switchReadonly() {
      this.readonly = !this.readonly;
      this.quill.enable(!this.readonly)
    }
  },
  state() {
    return {
      quill: null,
      readonly: false,//若设置为只读，则工具栏应该隐藏
      restrictions: {},//编辑限制
    }
  },
})
