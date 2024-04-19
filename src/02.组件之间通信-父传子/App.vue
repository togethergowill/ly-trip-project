<template>
  <div>
    <h1>{{ message }}</h1>
    <show-info name="lyric" age="18" height="1.88" ShowMessage="你好" :goods="goods" propF="success"></show-info>

  </div>
</template>

<script>
  import ShowInfo from "./components/ShowInfo";
  export default {
    data() {
      return {
        message: "hello world",
        goods: {
          title: '连衣裙',
          price: '99',
          count: 10
        }
      }
    },
    components: {
      ShowInfo,
    }
  }
</script>

<style scoped></style>
