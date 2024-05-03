<template>
  <div class="tabbar">
    <template v-for="(item,index) in tabbarData" :key="item.image">
      <div class="tabbar-item" @click="itemClick(item, index)">
        <img :src="getAssetURL(item.activeImage)" alt="" v-if="currentIndex === index">
        <img :src="getAssetURL(item.image)" alt="" v-else-if="currentIndex !== index">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
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
    currentIndex.value= index
  }

</script>

<style lang="less" scoped>
.tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-top: 2px solid #f1f1f1;

  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
