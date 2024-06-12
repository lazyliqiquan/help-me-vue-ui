<script setup lang="ts">

import {QuillEditor} from "@vueup/vue-quill";
</script>

<template>
  <QuillEditor :toolbar="[
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image',  'formula'],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'color': [] }, { 'background': [] }],
  [{ 'align': [] }],
  ['clean']                                         // remove formatting button
]" theme="snow"/>
</template>

<style scoped>

</style>
