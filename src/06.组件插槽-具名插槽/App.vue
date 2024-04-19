<template>
  <div>
    <tabbar-nav>
      <template v-slot:left>
        <button>left</button>
      </template>

      <template v-slot:center>
        <button>center</button>
      </template>

      <template #right>
        <button>right</button>
      </template>
    </tabbar-nav>

    <tabbar-nav>
      <template v-slot:[position]>
        <a href="">注册</a>
      </template>
    </tabbar-nav>
    <button @click=" position = 'left'">left</button>
    <button @click=" position = 'center'">center</button>
    <button @click=" position = 'right'">right</button>
  </div>
</template>

<script>
  import TabbarNav from './components/TabbarNav.vue'
  export default {
    data() {
      return {
        position: 'center'
      }
    },
    components: {
      TabbarNav,
    },
  }
</script>

<style scoped></style>
