<template>
  <div>
    <h2>首页</h2>
    <h3>{{ counter }}</h3>
    <button @click="counter++"> +</button>
    <button @click="counter--"> -</button>
  </div>
</template>

<script>
export default {
  name:'home',
  data () {
    return {
      counter:0
    }
  },
  created(){
    console.log('Home组件被创建了')
  },
  unmounted(){
    console.log("Home组件被销毁了")
  },
  activated(){
    console.log("Home组件活跃")
  },
  deactivated(){
    console.log("Home组件不活跃")
  }
}
</script>

<style scoped>

</style>
