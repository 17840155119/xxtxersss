import type { GoodsItem } from './global'
/**
 * 首页，广告区域数据类型
 */
export type BannerItem = {
  // 跳转链接
  herfUrl: string
  // id
  id: string
  // 图片链接
  imgUrl: string
  // 跳转类型
  type: number
}

// 前台分类
export type CategoryItem = {
  id: string
  name: string
  icon: string
}

/** 首页-热门推荐数据类型 */
export type HotItem = {
  /** 说明 */
  alt: string
  /** id */
  id: string
  /** 图片集合[ 图片路径 ] */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 标题 */
  title: string
  /** 推荐类型 */
  type: string
}

// 猜你喜欢商品类型
export type GuessItem = GoodsItem
