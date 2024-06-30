<script setup lang="ts">
import Quill from "Quill"
import {onMounted} from "vue";
import {useEditStore} from "@/store/edit";
import hljs from 'highlight.js'

const editStore = useEditStore();
onMounted(() => {
  editStore.quill = new Quill('#editor', {
    modules: {
      syntax:{hljs},
      toolbar: '#toolbar'
    },
    placeholder: 'Compose an epic...',
    theme: 'snow',
  });
  setTimeout(()=>{
    // const Delta = Quill.import('delta');
    // editStore.quill.setContents(
    //   new Delta()
    //     .insert('const language = "JavaScript";')
    //     .insert('\n', { 'code-block': 'javascript' })
    //     .insert('console.log("I love " + language + "!");')
    //     .insert('\n', { 'code-block': 'javascript' })
    // );
  },1000)

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
  <div id="editor" style="margin-top: 70px;max-width: 95%;min-width: 60%;align-self: center ">
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
</style>
