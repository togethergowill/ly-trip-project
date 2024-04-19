<template>
  <div id="content">
    <h1>{{ message }}</h1>
    <content-list></content-list>
  </div>
</template>

<script>
  import contentList from './ContentList.vue'
  export default {
    components:{
      contentList,
    },
    data() {
      return {
        message: "我是main-content组件"
      }
    },
  }
</script>

<style scoped></style>
