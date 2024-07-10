// 控制消息
export class InfoModel {
  active: boolean = false
  status: string = ''
  msg: string = ''

  // methods
  // 弹出信息框
  display(status: number | string, msg: string) {
    if (typeof status === 'number') {
      this.status = status == 0 ? 'success' : 'error'
    } else {
      this.status = status
    }
    this.msg = msg
    this.active = true
  }
}
