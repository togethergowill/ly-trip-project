<template>
  <div>
    <home></home>
    <button @click="message = 'kury'">点击</button>
  </div>
</template>

<script>
  import Home from './components/Home'
  import { computed } from 'vue'
  export default {
    data() {
      return {
        message: "kebo"
      }
    },
    components: {
      Home,
    },
    provide() {
      return {
        age: '18',
        // 使用computed函数来实现，provide数据的响应式，底层实现原理跟computed属性一致
        name: computed(() => this.message)
      }
    }
  }
</script>

<style scoped></style>
