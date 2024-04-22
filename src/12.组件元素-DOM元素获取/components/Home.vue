<template>
  <div class="home">
    <slot></slot>
    <tabbar-nav></tabbar-nav>
  </div>
  <div class="next-home">
    <slot></slot>
    <tabbar-nav></tabbar-nav>
  </div>
</template>

<script>
import TabbarNav from './TabbarNav'
  export default {
    data() {
      return {
      }
    },
    methods:{
      printHomeMsg(){
        console.log('Home组件的message')
      }
    },
    components:{
      TabbarNav,
    }
  }
</script>

<style scoped></style>
