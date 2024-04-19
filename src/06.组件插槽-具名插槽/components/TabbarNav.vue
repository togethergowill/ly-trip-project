<template>
  <div class="tabbar-nav">
      <div class="left">
        <slot name="left">left</slot>
      </div>
      
      <div class="center">
        <slot name="center">center</slot>
      </div>

      <div class="right">
        <slot name="right">right</slot>
      </div>

      <div class="other">
        <slot name="default"></slot>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
.tabbar-nav{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left {
  width: 30.6667vw;
  background-color: orange;
}

.center {
  flex: 1;
  background-color: skyblue;
}

.right {
  width: 30.6667vw;
  background-color: aquamarine;
}

</style>
