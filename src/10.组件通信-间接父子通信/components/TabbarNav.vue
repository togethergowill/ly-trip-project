<template>
  <div>
    <h1> 我是home页面的TabbarNav </h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  inject:['name']
}
</script>

<style scoped>

</style>
