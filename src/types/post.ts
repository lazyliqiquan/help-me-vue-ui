// 帖子列表中需要显示的信息
import {UserBasicInfo} from "./user";

export class PostItem extends UserBasicInfo {
  postId: number
  title: string
  createTime: string
  postReward: number
  likeSum: number
  lendHandSum: number
  commentSum: number
  status: boolean
}

// 帖子的详细信息
export class PostDetail extends PostItem {
  seekHelpId: number// >0 帮助帖子对应的求助帖子
  tags: string[]
  likes: number[]
  postBan: number
  updateTime: string
  pageView: number
  document: string
  imageInfoList: string[]//imagePath|imageSize
  parse() {

  }
}

export interface BeforeEditParam {
  postType: number
  seekHelpId: number
  lendHandId: number
}

/*
*没说继承了某个类，就一定要使用所有的属性
* */
