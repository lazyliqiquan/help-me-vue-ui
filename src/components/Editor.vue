<script setup lang="ts">
import Quill from "Quill"
import {onBeforeMount, onMounted} from "vue";
import {useEditStore} from "@/store/edit";
import useEdit from "../hooks/useEdit";
import hljs from "highlight.js"
import 'highlight.js/styles/github-dark.css'


const {calculateAllImageSize} = useEdit()

const editStore = useEditStore();

// 自定义图片上传处理
function selectLocalImage() {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  // 限定只能是图片
  input.setAttribute('accept', 'image/*')
  input.click()
  input.onchange = () => {
    const file = input.files[0]
    if (file) {
      // ================
      const reader = new FileReader()
      reader.onload = (e) => {
        // 1.先计算文档中已经有多大的图片集先，再决定是否插入
        let totalMemory = calculateAllImageSize(this.quill, editStore.originImageInfoList)
        totalMemory += e.loaded
        console.log(totalMemory)
        // 还是转化为最小单位字节来比较吧，免得有些用户上传很多个不到1KB的图片
        const maxPicturesSize = editStore.restrictions.maxPicturesSize * 1024 * 1024
        if (totalMemory > maxPicturesSize) {
          editStore.activeEditDetail = true
        } else {
          const range = this.quill.getSelection()
          this.quill.insertEmbed(range.index, 'image', e.target.result)
          this.quill.setSelection(range.index + 1)
        }
      };
      reader.readAsDataURL(file)
    }
  };
}

onMounted(() => {
  const quill: Quill = new Quill('#editor', {
    modules: {
      syntax: {hljs},
      toolbar: '#toolbar'
    },
    placeholder: 'Compose an epic...',
    theme: 'snow',
  });
  editStore.quill = quill
  editStore.quill.getModule('toolbar').addHandler('image', selectLocalImage)
  // fixme 达到字数上限之后，若在文档末尾光标的前面编写内容，那么最后的文本将会被替换掉
  quill.on('text-change', (delta, oldDelta, src) => {
    const textLength = quill.getText().length
    const maxLength = editStore.restrictions.maxDocumentWords
    if (textLength > maxLength) {
      quill.deleteText(maxLength, textLength - maxLength)
      editStore.activeEditDetail = true
    }
  })
})


</script>

<template>
  <div id="toolbar" v-show="!editStore.readonly" class="fixed-top">
    <select class="ql-size" style="width: 70px">
      <option value="small"></option>
      <option selected></option>
      <option value="large"></option>
      <option value="huge"></option>
    </select>
    <select class="ql-color"></select>
    <select class="ql-background"></select>
    <button class="ql-bold"></button>
    <button class="ql-italic"></button>
    <button class="ql-underline"></button>
    <button class="ql-strike"></button>
    <button class="ql-blockquote"></button>
    <button class="ql-code"></button>
    <button class="ql-code-block"></button>
    <button class="ql-script" value="sub"></button>
    <button class="ql-script" value="super"></button>
    <button class="ql-list" value="ordered"></button>
    <button class="ql-list" value="bullet"></button>
    <button class="ql-list" value="check"></button>
    <button class="ql-link"></button>
    <button class="ql-image"></button>
    <select class="ql-align"></select>
    <button class="ql-clean"></button>
  </div>
  <div id="editor" style="margin-top: 70px;max-width: 80%;min-width: 60%;align-self: center ">
  </div>
</template>

<style scoped>
.fixed-top {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  align-content: center;
  justify-content: center;
}

.styled-image {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5); /* 设置阴影 */
  border-radius: 10px; /* 可选：设置圆角 */
}
</style>
