<template>
  <div>
    <h2>我是about组件</h2>
    <button @click="aboutBtnClick">点我</button>
    <button @click="moreAttrDemo">还点我 </button>
    <h3>message：{{ ly }}</h3>

    <h1>{{ modelValue }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message:'你好，世界',
    }
  },
  props:{
    ly:{
      type:String,
      default:'LY'
    },
    modelValue:{
      type:String,
    }
  },
  emits:['update:ly','update:modelValue'],
  methods:{
    aboutBtnClick(){
      this.$emit('update:ly',this.message)
    },
    moreAttrDemo(){
      this.$emit('update:model-value',this.message)
    }
  }
}
</script>

<style scoped>

</style>
