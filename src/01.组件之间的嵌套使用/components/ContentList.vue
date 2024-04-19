<template>
  <div id="content-list">
    <ul>
      <li v-for="item in movies">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        movies: ["一人之下", "凡人修仙传", "斗破苍穹", "熊出没"]

      }
    },
  }
</script>

<style scoped></style>
