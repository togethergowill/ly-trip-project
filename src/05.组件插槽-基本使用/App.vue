<template>
  <div>
    <!-- <show-message>
      <button>我是按钮</button>
    </show-message>

    <show-message>
      <a href="www.bai.com">百度一下</a>
    </show-message>

    
    <show-message>
      <img src="@/asset/demo01.png" alt="">
    </show-message> -->

    <show-message>
      <template v-for="item in 3">
          <button>item</button>
      </template>
    </show-message>
  </div>
</template>

<script>
  import ShowMessage from './components/ShowMessage.vue'
  export default {
    data() {
      return {
     
      }
    },
    components: {
      ShowMessage,
    },
  }
</script>

<style scoped></style>
