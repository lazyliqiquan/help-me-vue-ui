class PostItem {
  id: number
  avatar: string
  title: string
  createTime: string
  reward: number
  likeSum: number
  lendHandSum: number
  commentSum: number
  status: boolean
  constructor() {
  }
}

class PostDetail extends PostItem {
  tags: string[]
  likes: number[]
  postBan: number
  updateTime: string
  codePath: string
  pageView: number
  imageUrls: string[]
  userId: number
  userName: string
  registerTime: string
}
