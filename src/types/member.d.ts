// 通用用户信息
type BaseProfile = {
  // 用户id
  id: number
  // 用户昵称
  nickname?: string
  // 用户头像
  avatar: string
  // 用户名
  account: string
}

// 小程序登录，登录用户信息
export type LoginResult = BaseProfile & {
  // 用户手机号
  mobile: string
  // 用于后续接口调用的token ，有效期三天
  token: string
}

/** 个人信息 用户详情信息 */
export type ProfileDetail = BaseProfile & {
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
}
/** 性别 */
export type Gender = '女' | '男'

/**个人信息，修改请求体参数 Pick是选取的意思 */
export type profileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  // 省份编码
  provinceCode?: string
  // 城市编码
  cityCode?: string
  // 区/县编码
  countyCode?: string
}
