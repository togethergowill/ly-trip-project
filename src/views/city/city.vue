<template>
  <div class="city">
    <div class="top">
      <van-search v-model="value" show-action placeholder="城市/区域/位置" @search="onSearch" @cancel="onCancel"
        shape="round" />

      <van-tabs v-model:active="activeIndex" color="#ff9854">
        <template v-for="(value, key, index) in allCities">
          <van-tab :name="index" :title="value.title">
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <city-group :allCities="allCities"></city-group>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import router from '@/router';
  import useCityStore from '@/stores/moudles/city'
  import { storeToRefs } from 'pinia';
  import cityGroup from './compos/city-group.vue'

  // 1. input搜索栏的数据和函数
  const value = ref('')
  function onSearch() {

  }
  function onCancel() {
    router.back()
  }

  // 2. 拿取pinia中的city数据
  const cityStore = useCityStore()
  cityStore.fetchCityAllData()
  const { allCities } = storeToRefs(cityStore)

  // 3. 改变tab的默认样式
  const activeIndex = ref(0);
</script>

<style lang="less" scoped>
.city {

  // 4. 实现top的固定
  // 1）实现方式一：
  // .top {
  //   position: fixed;
  //   left: 0;
  //   right: 0;
  //   top: 0;

  // }

  // .content {
  //   margin-top: 98px;
  // }

  // 2）实现方式二：
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    position: relative;
    overflow-y: auto;
    height: calc(100vh - 98px);

    :deep(.van-index-bar__sidebar) {
      top: 98px;
      transform: translateY(0);
    }

  }

}
</style>
