/**POST/member/address
isDefault:是否为默认，1为是，0为否 ，注意：此处按照接口实现 */

import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**获取收货地址列表
GET/member/address */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**获取收货地址详情
GET/member/address/{id} */
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**修改收货地址
PUT/member/address/{id} */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**删除收货地址
DELETE/member/address/{id} */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
