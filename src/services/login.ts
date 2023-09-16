import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

// 小程序登录
type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
export const postLogWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 小程序登录-内测版
// POST/login/wxMin/simple

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: { phoneNumber },
  })
}
