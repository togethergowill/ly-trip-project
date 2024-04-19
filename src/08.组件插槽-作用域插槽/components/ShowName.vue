<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index"></slot>
    </template>

    <h1>hello world</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      names: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped></style>
