export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 将帖子id，string类型转为int，转换失败返回number,postId应该为正整数
export function getValidPostId(postId: string): number {
  if (!postId.trim()) {
    return 0
  }
  // 使用正则表达式检查字符串是否只包含数字字符
  const numberPattern = /^\d+$/;
  if (!numberPattern.test(postId)) {
    return 0
  }
  const num = Number(postId)
  if (!Number.isInteger(num) || num <= 0) {
    return 0
  }
  return num
}

export function getWebsiteUrl(): string {
  return window.location.protocol + '//' + window.location.host + '/'
}

function addLeadingZero(number: number): string {
  return `${number < 10 ? '0' : ''}${number}`
}

function inTime(isDate: boolean): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());
  const dateStr = `${year}-${month}-${day}`
  if (isDate) {
    return dateStr
  }
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  return `${dateStr} ${hours}:${minutes}`;
}

export function getTime(): string {
  return inTime(false)
}

export function getDate(): string {
  return inTime(true)
}
