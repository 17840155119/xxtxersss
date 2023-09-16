import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
/**
 *
 *  特惠推荐-小程序
    GET/hot/preference
    请求参数
Query 参数
subType  string 可选Tab 项的 id，默认查询全部 Tab 项的第 1 页数据

pageSize  integer 分页数据  每页条数可选  示例值:10
page  integer 分页页码  可选示例值:1
 */
export type HotParams = PageParams & { subType?: string } //合并
export const getHotRecommemdAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
