// 因为编辑、修改和渲染使用到的参数大差不差，所以都放在这一个对象里面，但是这样会太臃肿，所以可以再细分一下
// 比如把不需要quill的属性区分开
import {EditConfig} from "./config";
import {EditRestrictions} from "./restrictions";
import {router} from "../../plugins/router";
import {useRoute} from "vue-router";
import {website} from "../../settings/website";
import {useAppStore} from "../../store/app";
import {getValidPostId} from "../../utils";
import http from "../../utils/http";

export class EditModel extends EditConfig {
  postType: number = 0
  seekHelpId: number = 0
  lendHandId: number = 0
  title: string = ''
  reward: number = 0
  tags: string[] = []
  originImageList: string[] = []
  editRestrictions: EditRestrictions = new EditRestrictions()
  activeEditDetail: boolean = false//是否展示文档中的信息
//   methods
//   上传文档
  submitPost() {


  }

  // 用户准备进行编辑之前，先检查用户的编辑权限
  async checkEditBan(): Promise<string> {
    return await http.post('/before-edit', {
      postType: this.postType.toString(),
      seekHelpId: this.seekHelpId,
      lendHandId: this.lendHandId,
    }).then(res => {
      if (res.data.code === 0) {
        this.editRestrictions.parse(res.data.data.restrictions)
        return ''
      } else {
        return res.data.msg
      }
    }).catch(err => {
      return err.toString()
    })
  }

  // 将请求得到的帖子数据渲染到编辑器中
  async showPost(postId: string): Promise<string> {
    return await http.post('/view-post', {postId: postId}).then(res => {
      if (res.data.code === 0) {
        console.log(res.data.data)
        return ''
      } else {
        return res.data.msg
      }
    }).catch(err => {
      return err.toString()
    })
  }

  async beforeEdit() {
    const route = useRoute()
    this.seekHelpId = -1
    this.lendHandId = -1
    if (route.params.hasOwnProperty('lendHandId')) {
      this.postType = 3
      this.seekHelpId = getValidPostId(route.params.seekHelpId as string)
      this.lendHandId = getValidPostId(route.params.lendHandId as string)
    } else if (route.path.includes('help')) {
      this.postType = 2
      this.seekHelpId = getValidPostId(route.params.seekHelpId as string)
    } else if (route.params.hasOwnProperty('seekHelpId')) {
      this.seekHelpId = getValidPostId(route.params.seekHelpId as string)
      this.postType = 1
    } else {
      this.postType = 0
    }
    if (this.seekHelpId === 0 || this.lendHandId === 0) {
      await router.replace({
        path: '/error', query: {
          title: 'route error',
          content: 'seek help id or lend hand id is not a positive integer'
        }
      })
      return
    }
    // 下面需要分类讨论一下:
    //   如果是新增帖子，需要发起资源限制请求
    //   如果是修改帖子，还需要获取帖子数据
    let funcList = [this.checkEditBan()]
    const [res1] = await Promise.all(funcList)
  }

//  添加标签
  addTag(tag: string): boolean {
    const appStore = useAppStore()
    tag = tag.trim()
    if (!tag) {
      appStore.info.display('warning', 'The label should not be a blank string')
      return false
    }
    if (tag.includes('|')) {
      appStore.info.display('warning', "Labels cannot contain symbols '|'")
      return false
    }
    if (this.tags.length >= website.postTagNumber) {
      appStore.info.display('warning', 'Add up to three labels')
      return false
    }
    if (tag.length > website.singleTagLength) {
      appStore.info.display('warning', `Tags should contain no more than ${website.singleTagLength} characters`)
      return false
    }
    this.tags.unshift(tag)
    return true
  }

}
