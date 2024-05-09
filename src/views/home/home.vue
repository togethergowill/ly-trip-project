<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-category />
    <home-content />
    <search-bar />
  </div>
</template>

<script setup>
  import { ref, reactive, watch } from 'vue'

  import homeNavBar from './compos/home-nav-bar.vue';
  import homeSearchBox from './compos/home-search-box.vue'
  import homeCategory from './compos/home-categories.vue'
  import homeContent from './compos/home-content.vue'
  import SearchBar from '@/components/search-bar/search-bar.vue'


  import useHomeStore from '@/stores/moudles/home'
  import { useScroll } from '@/hooks/useScroll'

  const homeStore = useHomeStore()
  homeStore.fetchHomeHouseList()
  const { isReachBottom } = useScroll()
  // 使用watch属性监听isReachBottom是否发生改变，决定是否发起网络请求
  watch(isReachBottom, (newValue) => {
    // 使用promise的方式，确保发起网络请求成功后，在修改isReaachBottom的值
    if (newValue) {
      homeStore.fetchHomeHouseList().then(() => {
        isReachBottom.value = false
      })
    }
  })

</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
