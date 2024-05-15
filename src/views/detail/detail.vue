<template>
  <div class="detail">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <template v-if="mainPart">
      <tabbar-control :title="names" v-show="isShowTabbar" @subIndex="tabbarClick"></tabbar-control>
      <swipe :swipeData="mainPart.topModule.housePicture.housePics" />
      <house-info name="描述" :ref="getSectionRef" :top-data="mainPart.topModule" />
      <house-facility name="设施" :ref="getSectionRef"
        :facility-data="mainPart.dynamicModule.facilityModule.houseFacility"></house-facility>
      <house-landlord name="房东" :ref="getSectionRef"
        :landlord-data="mainPart.dynamicModule.landlordModule"></house-landlord>
      <house-comment name="评论" :ref="getSectionRef"
        :comment-data="mainPart.dynamicModule.commentModule"></house-comment>
      <nearby-house name="周边" :ref="getSectionRef" :map-data="mainPart.dynamicModule.positionModule"></nearby-house>
      <checkin-notice name="须知" :ref="getSectionRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"></checkin-notice>
    </template>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { getDetailInfos } from '@/services'
  import { useRoute, useRouter } from "vue-router"

  import tabbarControl from "@/components/tabbar-control/tabbar-control.vue"
  import swipe from "./compos/house-swipe.vue"
  import houseInfo from "./compos/house-info.vue"
  import houseFacility from "./compos/house-facility.vue"
  import houseLandlord from './compos/house-landlord.vue'
  import houseComment from "./compos/house-comment.vue"
  import nearbyHouse from "./compos/nearby-house.vue"
  import checkinNotice from './compos/checkin-notice.vue'
  import { useScroll } from '@/hooks/useScroll'

  const route = useRoute()
  const router = useRouter()
  const houseId = route.params.id

  const detailInfos = ref({})
  const mainPart = computed(() => {
    return detailInfos.value.mainPart
  })

  getDetailInfos(houseId).then(res => {
    detailInfos.value = res.data
  })

  function onClickLeft() {
    router.back()
  }

  // 1. 详情页的top-tabbar页面和按钮之间的响应效果
  // 1.1 使用一个对象管理tabbar的item 
  const sectionEls = ref({})

  function getSectionRef(value) {
    //  if(!value) return
    const name = value.$el.getAttribute('name')
    sectionEls.value[name] = value.$el
  }

  // 1.2 使用计算属性获取到names
  const names = computed(() => Object.keys(sectionEls.value))

  // 1.3 页面滚动到300px的时候显示isShowTabbar
  const { scrollTop } = useScroll()
  const isShowTabbar = computed(() => scrollTop.value >= 300)

  // 2. 点击tabbar-item跳转到对应option的位置
  function tabbarClick(index) {
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let distance = el.offsetTop - 42

    document.documentElement.scrollTo({
      top: distance,
      behavior: "smooth",
    })

  }


</script>

<style lang="less" scoped>
.detail {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 500;
}
</style>
