// 因为编辑、修改和渲染使用到的参数大差不差，所以都放在这一个对象里面，但是这样会太臃肿，所以可以再细分一下
// 比如把不需要quill的属性区分开
export class EditModel extends EditConfig {
  postType: number = 0
  title: string = ''
  // editRestrictions: EditRestrictions = new EditRestrictions()
}
