export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
