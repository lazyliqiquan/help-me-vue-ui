import Quill from "Quill";
import {router} from "../plugins/router";
import {useEditStore} from "../store/edit";
import http from "../utils/http";
import {BeforeEditParam} from "../types/post";

export default function () {
  // 渲染前：给文档中的所有图片加上网络前缀
  // 上传前：将文档中url形式的图片的网络前缀去掉;将memory形式的图片转为文件，同时替换为一个唯一标识符
  // before edit
  async function beforeEdit(param: BeforeEditParam) {
    const editStore = useEditStore()
    editStore.postType = param.postType
    await http.post('/before-edit', {
      postType: param.postType.toString(),
      seekHelpId: param.seekHelpId.toString(),
      lendHandId: param.lendHandId.toString(),
    }).then(res => {
      if (res.data.code === 0) {
        editStore.parseRestrictions(res.data.data.map)
      } else {
        router.replace({path: '/error', query: {content: res.data.msg}})
      }
    }).catch(err => {
      router.replace({path: '/error', query: {content: err.toString()}})
    })
  }

  // 计算文档中所有图片的大小
  function calculateAllImageSize(quill: Quill, originImageInfoList: string[]): number {
    // 1.先计算文档中已经有多大的图片集先，再决定是否插入
    const images = quill.root.querySelectorAll('img')
    let totalMemory = 0
    images.forEach(img => {
      // todo 优化：img就是获取到底dom实例，可以直接修改他的样式,可以给图片添加阴影
      // img.setAttribute('width','100px')
      // img.setAttribute('height','auto')
      // 根据是否包含','来判断src里面是url还是memory
      if (img.src.includes(',')) {
        // memory形式的图片,[0]是图片的说明信息，包含图片类型，[1]图片具体的memory
        const base64String = img.src.split(',')[1];
        const byteLength = (base64String.length * 3) / 4 - (base64String.indexOf('=') > 0 ? base64String.length - base64String.indexOf('=') : 0);
        totalMemory += byteLength;
      } else {
        // url形式的图片
        originImageInfoList.forEach((e) => {
          const imagePath = e.split('|')[0]
          const imageSize = e.split('|')[1]
          if (img.src.includes(imagePath)) {
            totalMemory += Number(imageSize)
          }
        })
      }
      // fixme 这种方法受到同源策略的影响,后续可以优化一下，这样前端就不需要获取帖子中原本的图片大小了
      // console.log(performance)
      // const iTime = performance.getEntriesByName(img.src)[0];
      // console.log(iTime.toJSON()); //or encodedBodySize, decodedBodySize
      // performance.getEntriesByName(img.src)[0]
    })
    return totalMemory
  }

  return {beforeEdit, calculateAllImageSize}
}
/*
* todo
*  需要好好分类讨论一下编辑前的操作，可以大致分为两类：新增帖子和修改帖子
*  前者不需要获取帖子内容，后者需要，然后浏览帖子的时候也需要获取到帖子的内容，所以可以包装成一个函数
*  要不把编辑帖子和渲染帖子都放到一个类里面算了，这样还方便拿到quill实例
* */
