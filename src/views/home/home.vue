<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
  </div>
</template>

<script setup>
  import { ref,reactive } from 'vue'
  import homeNavBar from './compos/home-nav-bar.vue';
  import homeSearchBox from './compos/home-search-box.vue'
  
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
