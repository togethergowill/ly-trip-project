<template>
  <div>
    <h2>个人中心</h2>
    <button @click="profileBtnClick">我是Profile</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message:'我是来自Profile的数据'
    }
  },
  emits:['provideDataApp'],
  methods:{
    profileBtnClick(){
      this.$emit('provideDataApp',this.message)
    }
  }
}
</script>

<style scoped>

</style>
