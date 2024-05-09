<template>
  <div class="search">
    <h2>{{ $route.query.checkInDate }}</h2>
    <h2>{{ $route.query.leaveDate }}</h2>
    <h2>{{ $route.query.cityInfo }}</h2>
  </div>
</template>

<script setup>
  import { ref,reactive } from 'vue'
  import useHomeStore from '@/stores/moudles/home'
  
</script>

<style scoped>

</style>
