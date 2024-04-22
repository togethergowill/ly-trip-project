<template>
  <div>
    <home></home>
    <about></about>
  </div>
</template>

<script>
  import Home from './components/Home'
  import About from './components/About'
  // const Category = import("./components/About.vue")
  // console.log(Category)
  export default {
    data() {
      return {
      }
    },
    components: {
      Home,
      About
    }
  }
</script>

<style scoped></style>
