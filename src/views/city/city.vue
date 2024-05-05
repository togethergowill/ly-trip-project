<template>
  <div class="city">
    <div class="top">
      <van-search v-model="value" show-action placeholder="城市/区域/位置" @search="onSearch" @cancel="onCancel"
        shape="round" />

      <van-tabs v-model:active="activeCityGroup" color="#ff9854">
        <template v-for="(value, key, index) in allCities">
          <van-tab :name="key" :title="value.title">
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">

      <!-- <city-group :currentCityGroup="currentCityGroup" v-show="key === currentCityGroup"></city-group> -->

      <!-- 5. tab切换优化 -->
      <template v-for="(value,key,index) in allCities">
        <city-group :currentCityGroup="value" v-show="key === activeCityGroup"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
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

  // 4. 通过van-tab组件的v-model:active的值获取当前城市分组
  const activeCityGroup = ref()
  // 4.1 当处理普通数据为响应数据时，值获取操作复杂，可以使用计算属性完成普通数据的响应操作
  const currentCityGroup = computed(() => {
    return allCities.value[activeCityGroup.value]
  })

</script>

<style lang="less" scoped>
.city {

  // 3. 实现top的固定
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

    // :deep(.van-index-bar__sidebar) {
    //   transform: translateY(-40%);
    // }

  }

}
</style>
