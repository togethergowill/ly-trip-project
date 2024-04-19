<template>
  <div>
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    // emits:['subAdd'],
    emits: {
      // 不需要验证
      addOne: null,
      subOne: null,

      subAdd: function (count) {
        if (count <= 5) {
          return true
        }
        return false
      }
    },
    methods: {
      btnClick(count) {
        this.$emit('subAdd', count)
      }
    },
  }
</script>

<style scoped></style>
