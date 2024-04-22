<template>
  <div class="app">
    <template v-for="(item, index) of tabs" :key="item">
      <button :class="{ active: currentItem === item }" @click="currentItem = item">{{ item }}</button>
    </template>

    <!-- 组件名称来自于组件的name属性 -->
    <keep-alive include="home,profile">
      <component name="hl" :age="18" :height="1.88" @provideDataApp="provideDataApp" :is="currentItem"></component>
    </keep-alive>
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  import Category from './components/Category.vue'
  // import Home from './components/Home.vue'
  const AsyncHome = defineAsyncComponent(() => import("./components/Home.vue"))
  import Profile from './components/Profile.vue'
  export default {
    data() {
      return {
        currentIndex: 0,
        currentItem: 'home',
        tabs: ['home', 'category', 'profile']
      }
    },
    components: {
      Category,
      Home: AsyncHome,
      Profile
    },
    methods: {
      provideDataApp(message) {
        console.log(message)
      }
    }
  }
</script>

<style scoped>
.active {
  color: red;
}
</style>
