class Website {
  readonly nameOrEmailLength: number = 20
  readonly passwordLength: number = 15
  readonly blankSpace: string = ' '
  readonly showSnackbarTime: number = 10000
}

// 暴露到底是怎么使用的？
export const website = new Website()
