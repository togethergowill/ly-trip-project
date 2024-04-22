<template>
  <div>
    <slot :message="message"></slot>
    <slot name="home" :home="home"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      home:'home.html'
    }
  },
  props:['message']
}
</script>

<style scoped>

</style>
