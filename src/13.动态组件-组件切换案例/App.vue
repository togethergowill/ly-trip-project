<template>
  <div class="app">
    <!-- 1. 切换active的做法 -->
    <!-- 1.1 index绑定的方法 -->
    <!-- <template v-for="(item, index) of tabs" :key="item">
      <button :class="{ active: currentIndex === index }" @click="currentIndex = index">{{ item }}</button>
    </template> -->

    <!-- 1.2 绑定item -->

    <template v-for="(item, index) of tabs" :key="item">
      <button :class="{ active: currentItem === item }" @click="currentItem = item">{{ item }}</button>
    </template>

    <!-- 1. 第一种做法 -->
    <!-- <div class="view">
      <template v-if="currentIndex===0">
        <home></home>
      </template>
      <template v-else-if="currentIndex===1">
        <category></category>
      </template>
      <template v-else-if="currentIndex===2">
        <profile></profile>
      </template>
    </div> -->

    <!-- 2. 第二做法使用动态组件 -->
    <component name="hl" :age="18" :height="1.88" @provideDataApp="provideDataApp" :is="currentItem"></component>
  </div>
</template>

<script>
  import Category from './components/Category.vue'
  import Home from './components/Home.vue'
  import Profile from './components/Profile.vue'
  export default {
    data() {
      return {
        currentIndex: 0,
        currentItem:'home',
        tabs: ['home', 'category', 'profile']
      }
    },
    components: {
      Category,
      Home,
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
