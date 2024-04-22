<template>
  <div>
    <h1 ref="title">{{ message }}</h1>
    <home v-if="isActive" ref="home">
      <h2>homes组件</h2>
    </home>
    <button @click="getElement">点我输出ref</button>
    <button @click="useHomeMethod">点我调用home组件方法</button>
    <button @click="getSubCopnRoot">点我获取子组件的跟元素</button>

    <tabbar-nav></tabbar-nav>

  </div>
</template>

<script>
  import TabbarNav from "./components/TabbarNav.vue";
  import Home from "./components/Home.vue"

  export default {
    data() {
      return {
        message: 'hello world',
        isActive: true
      }
    },
    methods: {
      getElement() {
        // 1. 拿取DOM元素和组件元素，记得使用ref属性标记
        console.log(this.$refs.title)
        console.log(this.$refs.home)
      },
      useHomeMethod() {
        // 2. 拿取到的组件，实则就是实例对象，所以可以直接调用组件的方法
        this.$refs.home.printHomeMsg()
      },
      getSubCopnRoot(){
        // 4. 拿取子元素的根元素-单根情况
        console.log(this.$refs.home.$el)

        // 5. 拿取子元素的根元素-多个情况，不推荐使用多根，不利于维护
        console.log(this.$refs.home.$el.nextElementSibling)
      }
    },
    components: {
      TabbarNav,
      Home
    }
  }
</script>

<style scoped>
button{
  margin: 10px 10px 10px 0;
}
</style>
