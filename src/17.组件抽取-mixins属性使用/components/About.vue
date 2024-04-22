<template>
  <div>
    <h1>我是about组件</h1>
    <h2>{{ message }}</h2>
    <button @click="printInfo">点击</button>
  </div>
</template>

<script>
import lyMixin from '../js/ly-mixin';
export default {
  data () {
    return {
    }
  },
  mixins:[lyMixin],
  methods:{
    printInfo(){
      console.log('second')
    }
  }
}
</script>

<style scoped>

</style>
