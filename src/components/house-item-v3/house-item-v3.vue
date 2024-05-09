<template>
  <div class="house-item" @click="btnClcik">
    <img :src="houseData.image.url" alt="">
    <div class="bottom">
      <div class="location">
        <img src="@/assets/img/home/location.png" alt="">
        <span class="l-name">{{ houseData.location }}</span>
      </div>
      <p class="title">{{ houseData.houseName }}</p>
      <footer>
        <p class="house-info">{{ houseData.summaryText }}</p>
        <p class="price">¥{{ houseData.finalPrice }}</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, defineProps } from 'vue'
  const props = defineProps({
    houseData: {
      type: Object,
      default: () => ({})
    }
  })

</script>

<style lang="less" scoped>
.house-item {
  position: relative;
  height: 223px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 8px;

  img {
    width: 100%;
    border-radius: 6px 6px 0 0;
    height: 112px;
  }

  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    padding: 8px 10px 0;

    .location {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }

    .l-name {
      margin-left: 2px;
      font-size: 11px;
      color: #666;
      text-align: left;
      line-height: 12px;
      margin-bottom: 2px;
    }

    img {
      width: 12px;
      height: 12px;
    }

    .title {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #333;
      line-height: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    footer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10px;

      .house-info {
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #666;
        line-height: 12px;
        margin: 4px 0 8px;
        width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }



      .price {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #ff9645;
      }
    }
  }
}
</style>
