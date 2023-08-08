// cookie.js

// 设置 Cookie
export function setCookie(name, value) {
  const expires = new Date();
  expires.setTime(expires.getTime() + 60 * 60 * 1000); // 1小时的毫秒数
  document.cookie = `${name}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=/`;
}

// 获取 Cookie 值
export function getCookie(name) {
  const cookie = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookie ? decodeURIComponent(cookie.pop()) : "";
}

// 删除 Cookie
export function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}
