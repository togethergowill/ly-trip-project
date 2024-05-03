<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item icon="home-o" :to="item.path">{{ item.text }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import tabbarData from '@/assets/data/tabbar';
  import { getAssetURL } from '@/utils/load_assets'
  import { useRouter } from 'vue-router';

  const currentIndex = ref(0)

  const router = useRouter()
  function itemClick(item, index) {
    router.push(item.path)
    currentIndex.value = index
  }

</script>

<style lang="less" scoped>
.tabbar {
  :deep(.van-icon){
    font-size: 50px;
  }
  img {
    width: 36px;
  }

}
</style>
