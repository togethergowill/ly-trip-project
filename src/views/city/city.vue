<template>
  <div class="city">
    <div class="top">
      <van-search v-model="value" show-action placeholder="城市/区域/位置" @search="onSearch" @cancel="onCancel"
        shape="round" />

      <van-tabs v-model:active="activeIndex" color="#ff9854">
        <template v-for="(value, key, index) in allCities">
          <van-tab :name="index" :title="value.title">内容 {{ index }}</van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
    </div>
    <!-- <button @click="btnClick">按钮</button> -->
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import router from '@/router';
  import useCityStore from '@/stores/moudles/city'
  import { storeToRefs } from 'pinia';

  // function btnClick(){
  //   console.log(allCities.value)
  //   console.log("store",cityStore.allCities)
  // }

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

  .content {
    height: calc(100vh);
  }
}
</style>
