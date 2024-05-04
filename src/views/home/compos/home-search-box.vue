<template>
  <div class="search-box">
    <div class="address">
      <div class="city" @click="cityBtnClick">{{ city }}</div>
      <div class="location" @click="locationClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import axios from "axios"
  import useLocationStore from '@/stores/moudles/location';
  import { storeToRefs } from 'pinia';
  import router from '@/router'

  const locationStore = useLocationStore()

  // 1. 处理根据实时经纬度信息返回城市地址（我的位置）
  const city = ref('北京')
  locationStore.getLocation()
  function locationClick() {
    locationStore.getLocation()
    let cityInfo = locationStore.cityInfo
    if (cityInfo.city instanceof Array) {
      city.value = cityInfo.province
    } else city.value = cityInfo.city
  }

  // 2. 处理点击城市名实现to city页面
  function cityBtnClick() {
    router.push('/city')
  }



</script>

<style lang="less" scoped>
.search-box {
  .address {
    display: flex;
    align-items: center;
    height: 41px;
    padding: 0 20px;

    .city {
      flex: 1;
      color: #333;
      font-size: 15px;
    }

    .location {
      width: 74px;
      display: flex;
      align-items: center;

      .text {
        position: relative;
        top: 1px;
        font-size: 12px;
        color: #666;
      }

      img {
        width: 20px;
        margin-left: 3px;
      }
    }
  }
}
</style>
