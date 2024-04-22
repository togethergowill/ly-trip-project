<template>
  <div>
    <show-name :message="message">
      <template v-slot:default="props">
        <span>{{ props.message }}</span>
      </template>
      <!-- 1. 简写一 -->
      <!-- <template v-slot="props">
        <span>{{ props.message }}</span>
      </template> -->

      <template v-slot:home="props">
        <h2 class="">{{ props.home }}</h2>
      </template>
    </show-name>

    <!-- 2.简写二 只使用默认插槽的情况，可以在show-name上接收参数 -->
    <show-name v-slot="props" :message="message">
      <h1>简写二：{{ props.message }}</h1>
    </show-name>

    <!-- 3. 默认插槽和具名插槽混合使用，就能使用组件名来接收参数 -->
  </div>
</template>

<script>
import ShowName from './components/ShowName.vue';
export default {
  data () {
    return {
      message:'hello world'
    }
  },
  components:{
    ShowName
  }
}
</script>

<style scoped>

</style>
