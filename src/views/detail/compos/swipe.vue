<template>
  <div class="detail">
    <van-swipe class="swipe" :autoplay="3000" indicator-color="#fff">
      <template v-for="(item, index) in swipeData" :key="item.url">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) of swipeGroupData" :key="key">
            <div class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{ formatInfo(value[0].title) }}</span>
              <span v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getSwipeGroupIndex(key, active) }}/{{ value.length }}
              </span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue"

  const props = defineProps({
    swipeData: {
      type: Array,
      default: () => []
    }
  })
  // 2. 格式化info
  function formatInfo(info) {
    const reg = /【(.*?)】/
    return info.match(reg)[1]
  }

  // 1. 对数据进行分组
  const swipeGroupData = {}
  for (const item of props.swipeData) {
    if (!swipeGroupData[item.enumPictureCategory]) {
      swipeGroupData[item.enumPictureCategory] = []
    }
    swipeGroupData[item.enumPictureCategory].push(item)
  }

  // 3. 获取swipeData中item在swipeGroup中value[key]的索引，也就是轮播图的active
  function getSwipeGroupIndex(key, active) {
    return swipeGroupData[key].findIndex((item) => item === props.swipeData[active]) + 1
  }
  // 3.1 另一种写法，item为swipeData[active]
  // const getCategoryIndex = (item) => {
  //   const valueArray = swipeGroup[item.enumPictureCategory]
  //   return valueArray.findIndex(data => data === item) + 1
  // }


</script>

<style lang="less" scoped>
.detail {
  .swipe {
    img {
      width: 100%;
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);

      .item {
        margin: 0 3px;

        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
