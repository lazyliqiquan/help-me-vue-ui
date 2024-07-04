import {defineStore} from "pinia";
import Quill from "Quill";

export const useEditStore = defineStore('editStore', {
  actions: {
    switchReadonly() {
      this.readonly = !this.readonly;
      this.quill.enable(!this.readonly)
    },
    initQuill(instance: Quill) {
      this.quill = instance;
    }
  },
  state() {
    return {
      quill: <Quill>null,
      readonly: <boolean>false,//若设置为只读，则工具栏应该隐藏
      restrictions: {
        reward: <number>0,
        maxDocumentWords: <number>10000,
        maxPicturesSize: <number>10,//MB
      },//编辑限制
      activeEditDetail: <boolean>false
    }
  },
})
