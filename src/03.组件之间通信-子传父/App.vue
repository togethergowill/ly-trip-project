<template>
  <div>
    <h1>{{ counter }}</h1>
    <sub-app @subAdd="addCounter"></sub-app>
  </div>
</template>

<script>
import SubApp from './components/SubApp'
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods:{
      addCounter(count){
        this.counter += count
      },
    },
    components:{
      SubApp,
    }
  }
</script>

<style scoped></style>
