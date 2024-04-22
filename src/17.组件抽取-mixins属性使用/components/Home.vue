<template>
  <div>
    <h1>我是Home组件</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import lyMixin from '../js/ly-mixin';
export default {
  data () {
    return {
    }
  },
  mixins:[lyMixin]
}
</script>

<style scoped>

</style>
