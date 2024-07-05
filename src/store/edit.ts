import {defineStore} from "pinia";
import Quill from "Quill";

export const useEditStore = defineStore('editStore', {
  actions: {
    switchReadonly() {
      this.readonly = !this.readonly;
      this.quill.enable(!this.readonly)
    },
  },
  state() {
    return {
      quill: <Quill>null,
      readonly: <boolean>false,//若设置为只读，则工具栏应该隐藏
      restrictions: {
        remainReward: <number>0,
        maxDocumentWords: <number>10000,
        maxPicturesSize: <number>10,//MB
      },//编辑限制
      activeEditDetail: <boolean>false,
      originImageInfoList: <string[]>[],//针对修改操作，原帖子中图片的信息:imagePath|imageSize
      currentPicturesSize: <number>0,
      currentDocumentWords: <number>0,
      post: {
        title: <string>'',

      }
    }
  },
})
