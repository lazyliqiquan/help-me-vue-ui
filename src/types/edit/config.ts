import Quill from "quill";

// 富文本编辑器的部分，处理比较底层的部分
export class EditConfig {
  quill: Quill = null
  readOnly: boolean = false
  currentPicturesSize: number = 0
  currentDocumentWords: number = 0
  activeEditDetail: boolean = false

//   methods
  // 切换编辑器的编辑状态
  switchReadOnly() {
    this.quill.enable(this.readOnly)
    this.readOnly = !this.readOnly
  }

  // 计算文档中此时所有图片文件的大小,有两种格式的图片文件
  // originImageInfoList : 文档中url格式的图片路径及大小 imagePath|imageSize
  // memoryImages : 文档中memory格式的图片
  calculateAllImageSize(originImageList: string[]): number {
    // 两种格式的图片，在文档中都是以<img/>标签的形式存在的
    const images = this.quill.root.querySelectorAll('img')
    let totalMemory: number = 0
    images.forEach(img => {
      // todo 美观上的优化：img就是获取到底dom实例，可以直接修改他的样式,可以给图片添加阴影
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
        originImageList.forEach((e) => {
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

  // 获取文档中的信息，并弹出一个对话框来展示
  getDocumentInfo(originImageList: string[]) {
    this.currentDocumentWords = this.quill.getText().length
    this.currentPicturesSize = this.calculateAllImageSize(originImageList)
    this.activeEditDetail = true
  }
}
