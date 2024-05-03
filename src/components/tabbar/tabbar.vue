<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #icon>
            <img :src="getAssetURL(item.activeImage)" alt="" v-if="index === currentIndex" />
            <img :src="getAssetURL(item.image)" alt="" v-else />
          </template>
          <span>{{ item.text }}</span>
        </van-tabbar-item>
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
  img {
    height: 26px;
  }

}
</style>
