<template>
  <div>
    <button @click="getParentCopn">点我获取父组件</button>
    <button @click="getRootCopn">点我获取跟组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '我是TabbarNav'
      }
    },
    methods: {
      getParentCopn(){
        // 3. 获取父组件和根组件
        console.log(this.$parent)
      },
      getRootCopn(){
        console.log(this.$root)
      }
    },

  }
</script>

<style scoped></style>
