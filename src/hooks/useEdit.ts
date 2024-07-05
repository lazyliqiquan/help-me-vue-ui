import Quill from "Quill";

export default function () {
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
  return {calculateAllImageSize}
}
