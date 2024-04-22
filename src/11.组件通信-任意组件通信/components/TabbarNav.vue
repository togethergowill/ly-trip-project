<template>
  <div>
    <button @click="provMessage">点击改变title</button>
  </div>
</template>

<script>
  import eventBus from "../utils"

  export default {
    data() {
      return {
        message: '我是TabbarNav'
      }
    },
    methods: {
      provMessage() {
        eventBus.emit("getMessage", this.message)
      }
    },
  }
</script>

<style scoped></style>
