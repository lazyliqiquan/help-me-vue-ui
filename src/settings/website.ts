class Website {
  readonly nameOrEmailLength: number = 25
  readonly passwordLength: number = 20
  readonly blankSpace: string = ' '
  readonly showSnackbarTime: number = 10000
  readonly authCodeLength: number = 6
  // post
  readonly postTagNumber: number = 3
  readonly singleTagLength: number = 10
  readonly postTitleLength: number = 30
}

// 暴露到底是怎么使用的？
export const website = new Website()
