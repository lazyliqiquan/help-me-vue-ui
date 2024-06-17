import {website} from "../settings/website";
import {readonly} from "vue";

export default function () {
  // 1 输入不能为空
  // 2 不能太长
  // 3 不能包含空格
  function verifyInput(input: string, inputType: string, length: number): string {
    if (input.length <= 0) {
      return `The ${inputType} cannot be empty`
    }
    if (input.length > length) {
      return `The ${inputType} cannot exceed ${length} characters`
    }
    if (input.includes(website.blankSpace)) {
      return `The ${inputType} cannot contain Spaces`
    }
    return ''
  }

  // 判断输入的邮箱是否合法
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function isValidEmail(email: string): boolean {
    return emailRegex.test(email);
  }


  //向外部提供东西
  return {verifyInput, isValidEmail}
}
