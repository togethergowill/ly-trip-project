<template>
  <div>
    <h2>分类</h2>
    <h2>Appdata：{{ name }} - {{ age }} - {{ height }}</h2>
    <h3>{{ counter }}</h3>
    <button @click="counter++"> +</button>
    <button @click="counter--"> -</button>
  </div>
</template>

<script>
  export default {
    name:'Category',
    data() {
      return {
        counter: 0,
      }
    },
    props: {
      name: {
        type: String,
        default: 'hl'
      },
      age: {
        type: Number
      },
      height: {
        type: Number
      }
    }
  }
</script>

<style scoped></style>
