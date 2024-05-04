<template>
  <div class="app">
    <router-view></router-view>
    <!-- <tabbar></tabbar>     -->
    <tabbar v-if="!route.meta.hideTabbar"></tabbar>    
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import useCityStore from './stores/moudles/city.js'
  import tabbar from './components/tabbar/tabbar.vue';
  import { useRoute } from 'vue-router';

  const cityStore = useCityStore()

  // 1. 使用路由携带参数的方式，决定tabbar是否展示
  const route = useRoute()


</script>

<style scoped></style>
  