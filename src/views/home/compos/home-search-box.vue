<template>
  <div class="search-box">
    <div class="search-top">
      <div class="address border-item">
        <div class="city" @click="cityBtnClick">{{ cityInfo }}</div>
        <div class="location" @click="locationClick">
          <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
      </div>

      <div class="stay-time border-item" @click="stayRowClick">
        <div class="start-box time-item">
          <div class="text">入住</div>
          <div class="time">{{ checkInDay }}</div>
        </div>
        <div class="during">共{{ duringDay }}晚</div>
        <div class="end-box time-item">
          <div class="text">离店</div>
          <div class="time">{{ leaveDay }}</div>
        </div>
      </div>

      <van-calendar v-model:show="show" type="range" @confirm="onConfirm" :round="false" :formatter="formatter"  :show-confirm="false"/>


      <div class="condition-box border-item">
        <div class="price">价格不限</div>
        <div class="person">人数不限</div>
      </div>

      <div class="default-search border-item">关键字/位置/民宿名</div>
    </div>

    <div class="hot-tags-box">
      <template v-for="item in hotSuggets">
        <span class="hot-tag" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>

    </div>

    <div class="search-button">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>

  </div>
</template>

<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import axios from "axios"
  import useLocationStore from '@/stores/moudles/location';
  import { storeToRefs } from 'pinia';
  import router from '@/router'
  import { getDate, getNextDate, getIntervalDate, getFormatDate } from "@/utils/manage_date"
  import useHomeStore from "@/stores/moudles/home"
  import useMainStore from "@/stores/moudles/main"

  // 1. 处理根据实时经纬度信息返回城市地址（我的位置）
  const locationStore = useLocationStore()
  const cityInfo = computed(() => {
    const tempCity = locationStore.cityInfo
    return tempCity.city instanceof Array ? tempCity.province : tempCity.city ?? "北京"
  })

  function locationClick() {
    locationStore.getLocation()
  }

  // 2. 处理点击城市名实现to city页面
  function cityBtnClick() {
    router.push('/city')
  }


  // 3. 处理用户停留时间
  const mainStore = useMainStore()
  const { checkinDate, leaveDate } = storeToRefs(mainStore)

  const checkInDay = ref(getFormatDate(checkinDate.value))
  const leaveDay = ref(getFormatDate(leaveDate.value))
  const duringDay = ref(getIntervalDate(checkinDate.value, leaveDate.value))

  const show = ref(false)
  // 3.1 点击日历确认键后，获取日历的数据，并赋值给入住时间和离开时间
  function onConfirm(values) {
    checkinDate.value = values[0]
    leaveDate.value = values[1]
    checkInDay.value = getFormatDate(checkinDate.value)
    leaveDay.value = getFormatDate(leaveDate.value)
    // 根据时间获取入住天数
    duringDay.value = getIntervalDate(checkinDate.value,leaveDate.value)
    show.value = false
  }
  // 3.2 标注入店和离店的flag
  const formatter = (day) => {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();
    if (day.type === 'start') {
      day.bottomInfo = '入住';
    } else if (day.type === 'end') {
      day.bottomInfo = '离店';
    }
    return day;
  };

  // 用户入住栏点击事件，设置show为true展示日历
  function stayRowClick() {
    show.value = true
  }

  // 4. hotSuggests数据的展示
  // 4.1 拿取hotSuggests数据
  const homeStore = useHomeStore()
  const { hotSuggets } = storeToRefs(homeStore)

  // 5. 点击搜索按钮跳转到search页面
  function searchBtnClick() {
    router.push({
      path: '/search',
      query: {
        checkInDay: checkInDay.value,
        leaveDay: leaveDay.value,
        cityInfo: cityInfo.value,
      }
    })
  }
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;

  .search-top {
    padding: 0px 20px 0px 20px;

    .border-item {
      box-sizing: border-box;
      border-bottom: 1px solid #f8f9f9;
      height: 40px;
    }

    .address {
      display: flex;
      align-items: center;
      height: 40px;

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

    .stay-time {
      display: flex;
      height: 44px;
      box-sizing: border-box;
      align-items: center;

      .time-item {
        display: flex;
        flex-direction: column;
      }

      .text {
        font-size: 10px;
        color: #999;
      }

      .time {
        font-size: 15px;
        color: #333;
        margin-top: 2px;
      }

      .during {
        font-size: 12px;
        color: #666;
        flex: 4;
        text-align: center;
      }

      .end-box {
        flex: 3;
      }
    }

    .condition-box {
      display: flex;
      color: #999;
      align-items: center;

      .price {
        flex: 3;
        line-height: 40px;
        border-right: 1px solid #f8f9f9;
      }

      .person {
        flex: 2;
      }
    }

    .default-search {
      color: #999;
      line-height: 40px;
    }
  }

  .hot-tags-box {
    display: flex;
    flex-wrap: wrap;
    padding: 6px 12px 6px 16px;

    .hot-tag {
      color: rgb(63, 73, 84);
      background-color: rgb(241, 243, 245);
      border-radius: 14px;
      padding: 4px 8px;
      margin-right: 4px;
      margin-top: 4px;
      font-size: 12px;
    }
  }

  .search-button {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 4px;

    .btn {
      height: 10.13333vw;
      width: 91.2vw;
      font-weight: 500;
      font-size: 18px;
      color: #fff;
      border-radius: 20px;
      background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
      line-height: 10.13333vw;

    }
  }
}
</style>
