<template>
  <div class="detail">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <template v-if="mainPart">
      <swipe :swipeData="mainPart.topModule.housePicture.housePics" />
      <house-info :top-data="mainPart.topModule" />
      <house-facility :facility-data="mainPart.dynamicModule.facilityModule.houseFacility"></house-facility>
      <house-comment :comment-data="mainPart.dynamicModule.commentModule"></house-comment>
    </template>
  </div>
</template>

<script setup>
  import { ref, reactive, computed } from 'vue'
  import { getDetailInfos } from '@/services'
  import { useRoute, useRouter } from "vue-router"
  import swipe from "./compos/swipe.vue"
  import houseInfo from "./compos//house-info.vue"
  import houseFacility from "./compos//house-facility.vue"
  import houseComment from "./compos/house-comment.vue"

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


</script>

<style lang="less" scoped>
.detail {
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-font-bold: 500;
}
</style>
