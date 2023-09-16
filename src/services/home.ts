import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home.d.ts'
import type { PageResule, PageParams } from '@/types/global'
/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
// 首页-前台分类-小程序
// GET
// /home/category/mutli
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
GET
/home/hot/mutli
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 猜你喜欢-小程序
GET/home/goods/guessLike
请求参数 Query 参数
page integer 页码默认值1 可选 示例值: 1
pageSize integer 页大小默认是10 可选 示例值:10
page: 1, pageSize: 10
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResule<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: {
      //   page,
      //   pageSize,
    },
  })
}
