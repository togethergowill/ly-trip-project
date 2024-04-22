<template>
  <div>
    <h1>{{ message }}</h1>
    <tabbar-nav></tabbar-nav>
    <home v-if="isActive">
      <h2>homes组件</h2>
    </home>
    <button @click="printMsg">隐藏/显示home组件</button>

  </div>
</template>

<script>
  import eventBus from "./utils"
  import TabbarNav from "./components/TabbarNav.vue";
  import Home from "./components/Home.vue"

  export default {
    data() {
      return {
        message: 'hello world',
        isActive: true
      }
    },
    methods: {
      printMsg() {
        this.isActive = !this.isActive
      }
    },
    created() {
      eventBus.on('getMessage', (message) => {
        this.message = message
      })
    },
    components: {
      TabbarNav,
      Home
    }
  }
</script>

<style scoped></style>
