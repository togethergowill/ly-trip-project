<template>
  <div>
    <!-- 1. 简写 -->
    <!-- <home v-model="name"></home> -->

    <!-- 2. 完整写法 -->
    <home :modelValue="name" @update:modelValue="name = $event"></home>
    {{ name }}
    <about v-model:ly="message" v-model="message"></about>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  export default {
    data() {
      return {
        name: 'kebo',
        message: 'hello world'
      }
    },
    components: {
      Home,
      About
    },
    methods: {
      printName() {
        // this.name = $event
      }
    }
  }
</script>

<style scoped></style>
