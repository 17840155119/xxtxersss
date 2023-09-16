export type CategoryTopItem = {
  // 一级分类id
  id: string
  // 一级分类名称
  name: string
  // 一级分类图片
  picture: string
  // 一级分类图片集
  imageBanners: [string]
  // 二级分类集合
  children: CategoryChildItem[]
}

export type CategoryChildItem = {
  id: string
  name: string
  picture: string
  parentId: null
  parentName: null
  goods: GoodsItem[]
}
// export type GoodsItem = {
//   categories: null
//   brands: null
//   saleProperties: null
// }
