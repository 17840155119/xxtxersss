<script setup lang="ts">
// import XtxSwiper from '@/components/XtxSwiper.vue'
// import XtxGuess from '@/components/XtxGuess.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home.d.ts'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import PageSkeleton from './components/PageSkeleton.vue'
// import type { XtxGuessInstance } from '@/components/components'
import { useGuessList } from '@/composables'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res)
  bannerList.value = res.result
}
// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

const isLoading = ref(false)

// 页面加载钩子函数
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

const { guessRef, onScrolltolower } = useGuessList()
// 自定义下拉刷新被触发
const isTriggered = ref(false)
// 下拉时
const onRefresherrefresh = async () => {
  // 动漫开启
  isTriggered.value = true
  // getHomeBannerData()
  // getHomeCategoryData()
  // getHomeHotData()
  // 重置猜你喜欢数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore,
  ])
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
  >
    <!-- 白骨架 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
