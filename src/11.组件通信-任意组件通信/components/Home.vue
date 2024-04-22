<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import eventBus from '../utils'
  export default {
    data() {
      return {
      }
    },
    methods: {
      homeEvent() {
        console.log("homeEvent在home组件中监听")
      }
    },
    created() {
      eventBus.on("getMessage", this.homeEvent)
    },
    unmounted() {
      eventBus.off("getMessage",this.homeEvent)
    },
  }
</script>

<style scoped></style>
