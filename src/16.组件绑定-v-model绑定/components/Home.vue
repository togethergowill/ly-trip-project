<template>
  <div>
    <h2>我是Home组件</h2>
    <h2>name:{{ modelValue }}</h2>
    <button @click="homeBtnClick">点击</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'james'
      }
    },
    props:{
      modelValue:{
        type:String,
        default:'kebo'
      }
    },
    emits:['update:modelValue'],
    methods:{
      homeBtnClick(){
        this.$emit('update:modelValue',this.name)
      }
    }
  }
</script>

<style scoped></style>
