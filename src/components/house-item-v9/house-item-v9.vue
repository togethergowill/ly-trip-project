<template>
  <div class="house-item">
    <img :src="houseData.image.url" alt="">
    <div class="bottom">
      <p class="house-info">{{ houseData.summaryText }}</p>
      <p class="title">{{ houseData.houseName }}</p>
      <footer>
        <p class="star">
          <van-rate :model-value="rateNum" count="5" size="12" color="#fff" gutter="2" readonly
            allow-half />
        </p>
        <p class="price">¥{{ houseData.finalPrice }}</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, defineProps, computed } from 'vue'

  const props = defineProps({
    houseData: {
      type: Object,
      default: () => ({})
    }
  })
  const rateNum = computed(() => Number(props.houseData.commentScore))


</script>

<style lang="less" scoped>
.house-item {
  position: relative;
  height: 223px;
  background-color: #fff;
  margin-bottom: 8px;


  img {
    border-radius: 6px;
    height: 223px;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 10px 0;

    .house-info {
      font-family: PingFangSC-Regular;
      font-size: 10px;
      color: #fff;
      line-height: 12px;
      margin-bottom: 4px;
    }

    .title {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #fff;
      line-height: 17px;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    footer {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .price {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
