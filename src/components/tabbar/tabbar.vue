<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" :route="true">
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
  import { ref, reactive, watch } from 'vue'
  import tabbarData from '@/assets/data/tabbar';
  import { getAssetURL } from '@/utils/load_assets'
  import { useRoute } from "vue-router"

  const currentIndex = ref(0)
  const route = useRoute()
  // 修复组件跳转路由，图标不渲染的bug
  watch(route, (newValue) => {
    currentIndex.value = tabbarData.findIndex(item => item.path === newValue.path)
    if (currentIndex.value === -1) return
  })

</script>

<style lang="less" scoped>
.tabbar {
  img {
    height: 26px;
  }

}
</style>
