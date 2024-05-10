<template>
  <div class="app">
    <router-view></router-view>
    <tabbar v-if="!route.meta.hideTabbar"></tabbar>
    <loading />
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import tabbar from './components/tabbar/tabbar.vue';
  import loading from './components/loading/loading.vue';

  import useCityStore from './stores/moudles/city.js'
  import { useRoute } from 'vue-router';

  const cityStore = useCityStore()

  // 1. 使用路由携带参数的方式，决定tabbar是否展示
  const route = useRoute()


</script>

<style scoped></style>