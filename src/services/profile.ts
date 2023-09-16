import type { ProfileDetail, profileParams } from '@/types/member'
import { http } from '@/utils/http'

// 获取个人信息
// GET/member/profile
// 请求参数
// Header 参数
// Authorization
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

// 修改个人信息
// PUT/member/profile

export const putMemberProfileAPI = (data: profileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
