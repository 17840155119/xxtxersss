/**添加收获地址：请求参数 */
export type AddressParams = {
  // 收货人姓名
  receiver: string
  // 联系方式
  contact: string
  // 所在省份编码
  provinceCode: string
  // 所在城市编码
  cityCode: string
  // 所在区/县编码
  countyCode: string
  // 详细地址
  address: string
  // 默认地址，1为是，0为否
  isDefault: number
}

/**收获地址项 */
export type AddressItem = AddressParams & {
  /**收获地址 */
  id: string
  /**省市区 */
  fullLocation: string
}
