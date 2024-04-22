<template>
  <div>
    <h1> 我是home页面 </h1>
    <tabbar-nav></tabbar-nav>
  </div>
</template>

<script>
  import TabbarNav from './TabbarNav.vue'
  export default {
    data() {
      return {
      }
    },
    components:{
      TabbarNav,
    },

  }
</script>

<style scoped>
h1 {
  font-size: 60px;
}
</style>
