import {defineStore} from "pinia";
import Quill from "Quill";
import {PostDetail} from "../types/post";


export const useEditStore = defineStore('editStore', {
  actions: {
    switchReadonly() {
      this.readonly = !this.readonly;
      this.quill.enable(!this.readonly)
    },
    parseRestrictions(restrictions) {
      // null | undefined
      this.restrictions.remainReward = restrictions.reward ?? 0
      this.restrictions.maxDocumentWords = restrictions.maxDocumentWords
      this.restrictions.maxPicturesSize = restrictions.maxPicturesSize
    }
  },
  state: () => {
    return {
      quill: <Quill>null,
      readonly: <boolean>false,//若设置为只读，则工具栏应该隐藏
      postType: <number>0,//编辑类型: 0 ~ 3
      restrictions: {
        remainReward: <number>0,
        maxDocumentWords: <number>10000,
        maxPicturesSize: <number>10,//MB
      },//编辑限制
      activeEditDetail: <boolean>false,
      currentPicturesSize: <number>0,
      currentDocumentWords: <number>0,
      // 数据是在onMounted执行完成之后才获取到的，如果在模板<template>里面使用数据，得到的数据就是null的
      // 应该只会执行一次吧
      post: new PostDetail(),
    }
  },
})
