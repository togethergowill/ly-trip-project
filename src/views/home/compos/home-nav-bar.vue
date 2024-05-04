<template>
  <div class="nav-bar">
    <div class="title">乐意旅途</div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'

</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f2f2f2;

  .title {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-color);
  }

}
</style>
