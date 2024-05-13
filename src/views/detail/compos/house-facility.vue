<template>
  <div class="house-facility">
    <show-detail title="房屋设施" moreText="查看全部设施">
      <template #default>
        <div class="facility-inner">
          <template v-for="item in facilityData.houseFacilitys">
            <div class="item" v-if="facilityData.facilitySort.includes(item?.groupId)">
              <div class="main">
                <img :src="item.icon" alt="">
                <span class="name">{{ item.groupName }}</span>
              </div>
              <div class="other">
                <template v-for=" facility in item.facilitys.slice(0, 4)">
                  <div class="info">
                    <i class="icon_check"></i>
                    <span>{{ facility.name }}</span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </template>
    </show-detail>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import showDetail from "@/components/show-detail/show-detail.vue"

  const props = defineProps({
    facilityData: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<style lang="less" scoped>
.facility-inner {
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;

  .item {
    display: flex;
    padding: 10px 15px 10px;
    font-size: 12px;

    .main {
      display: flex;
      flex: 2;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 20px;

      img {
        width: 22px;
      }
    }

    .other {
      flex: 7;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .info {
        width: 50%;
        margin-top: 5px;
      }
    }
  }
}
</style>
