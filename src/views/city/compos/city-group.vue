<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">热门</van-index-anchor>
      <div class="hot-cities">
        <template v-for="item in currentCityGroup.hotCities">
          <div class="city">{{ item.cityName }}</div>
        </template>
      </div>

      <template v-for="item in cities">
        <van-index-anchor :index="item.group" />
        <template v-for="city in item.cities">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
  import { ref, reactive, defineProps, computed } from 'vue'
  const props = defineProps({
    currentCityGroup: {
      type: Object,
      default: () => ({})
    },
    person: {
      type: String
    }
  })

  // 1. 获取传递过来的城市信息，并通过计算属性变为响应式数据
  const cities = computed(() => props.currentCityGroup.cities)

  const indexList = computed(() => {
    const list = props.currentCityGroup.cities.map((item) => item.group)
    list.unshift('#')
    return list
  })

</script>

<style lang="less" scoped>
.city-group {

  .hot-cities {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:0 10px;
    padding-right: 25px;

    .city {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 28px;
      border-radius: 14px;
      color: #000;
      background-color: #fff4ec;
      margin: 6px 0;
    }
  }
}
</style>
