<template>
  <div>
    <tab-control :title="['衣服', '鞋子', '裤子']" @subIndex="getCurrentIndex"></tab-control>

    <h1>{{ pageContent[pageIndex] }}</h1>
  </div>
</template>

<script>
  import TabControl from './components/TabControl'
  export default {
    data() {
      return {
        pageIndex: 0,
        pageContent: ["衣服列表", "鞋子列表", "裤子列表"]
      }
    },
    components: {
      TabControl,
    },
    methods: {
      getCurrentIndex(index) {
        this.pageIndex = index
      }
    }
  }
</script>

<style scoped></style>
