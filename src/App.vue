<template>
  <div class="app">
    <router-view></router-view>
    <tabbar></tabbar>
    
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import useCityStore from './stores/moudles/city.js'
  import tabbar from './components/tabbar/tabbar.vue';

  const cityStore = useCityStore()

</script>

<style scoped></style>
  