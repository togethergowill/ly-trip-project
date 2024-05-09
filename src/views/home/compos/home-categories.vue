<template>
  <div class="categories">
    <div class="banner">
      <template v-for="item in categories" :key="item.id">
        <div class="item">
          <img :src="item.pictureUrl" alt="">
          <span class="text">{{ item.title }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import useHomeStore from '@/stores/moudles/home'
  import { storeToRefs } from 'pinia'

  const homeStore = useHomeStore()
  homeStore.fetchHomeCategories()
  const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.categories {
  .banner {
    display: flex;
    height: 80px;
    padding: 0 10px;
    margin-top: 8px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }


    .item {
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 70px;

      img {
        width: 32px;
        height: 32px
      }

      .text {
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }
}
</style>
