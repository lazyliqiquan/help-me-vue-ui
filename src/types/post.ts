// 帖子列表中需要显示的信息
class PostItem {
  id: number = 0
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
// 帖子的详细信息
class PostDetail extends PostItem {
  tags: string[]
  likes: number[]
  postBan: number
  updateTime: string
  pageView: number
  imageUrls: string[]
  userId: number
  userName: string
  registerTime: string
}

/*
*
* */
