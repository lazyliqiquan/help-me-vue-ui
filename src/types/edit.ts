// 该类负责帖子的编辑和渲染操作
import Quill from "Quill";

export class PostContent {
  //直接获取到这一个实例，到时候操作就方便了
  // fixme 有一个问题就是，quill有时候会为空，解绑以后
  quill: Quill
}
