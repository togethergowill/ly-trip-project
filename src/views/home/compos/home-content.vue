<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <house-item-v9 v-if="item.discoveryContentType === 9" :houseData="item.data" @click="itemClick(item.data)" />
        <house-item-v3 v-if="item.discoveryContentType === 3" :houseData="item.data" @click="itemClick(item.data)" />
      </template>

    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
  import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
  import useHomeStore from '@/stores/moudles/home'
  import { storeToRefs } from 'pinia'
  import { useRouter } from "vue-router"

  const homeStore = useHomeStore()
  const { houseList } = storeToRefs(homeStore)
  const router = useRouter()

  function itemClick(item) {
    router.push('/detail/' + item.houseId)
  }

</script>

<style scoped>
.content {
  margin-bottom: 50px;

  .title {
    padding: 0 16px;
    font-size: 18px;
    color: #333;
    height: 48px;
    line-height: 48px;

  }

  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 16px 0px;
    background: #f5f7f9;
  }
}
</style>
