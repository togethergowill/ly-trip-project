<template>
  <div>
    <h2>分类</h2>
    <h2>Appdata：{{ name }} - {{ age }} - {{ height }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      name: {
        type: String,
        default: 'hl'
      },
      age: {
        type:Number
      },
      height: {
        type:Number
      }
    }
  }
</script>

<style scoped></style>
