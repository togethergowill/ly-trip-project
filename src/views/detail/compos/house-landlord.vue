<template>
  <div class="house-landlord">
    <show-detail title="房东主页" moreText="查看房东主页">
      <template #default>
        <div class="inner">
          <div class="header">
            <img :src="landlordData.topScroll" alt="">
          </div>
          <div class="message">
            <div class="info">
              <img :src="landlordData.hotelLogo" alt="">
              <div class="intro">
                <div class="name">{{ landlordData.hotelName }}</div>
                <template v-for="(item, index) in landlordData.hotelTags" :key="item.tagText.text">
                  <span class="more" :style="{ color: item.tagText.color }" v-if="index === 0">{{ item.tagText.text
                    }}&nbsp;</span>
                  <span class="more" :style="{ color: item.tagText.color }">|&nbsp;{{ item.tagText.text }} &nbsp;</span>
                </template>
              </div>
            </div>
            <div class="link-btn">
              <span>联系房东</span>
            </div>
          </div>
          <div class="rate">
            <template v-for="item in landlordData.hotelSummary">
              <div class="nice">
                <div class="text">{{ item.title }}</div>
                <div class="num">{{ item.introduction }}</div>
                <div class="desc">{{ item.tip }}</div>
              </div>
            </template>

          </div>

        </div>
      </template>
    </show-detail>
  </div>
</template>

<script setup>
  import showDetail from '@/components/show-detail/show-detail.vue';
  const props = defineProps({
    landlordData: {
      type: Object,
      default: () => ({})
    }
  })

</script>

<style scoped>
:deep(.content) {
  border-bottom: 1px solid #f5f5f5;
}

.inner {
  padding: 0 10px;
  padding-top: 0;

  .header {
    img {
      width: 100%;
      border-radius: 2px;
    }
  }

  .message {
    display: flex;
    justify-content: space-between;

    .info {
      display: flex;
      justify-content: space-between;

      img {
        width: 76px;
        margin-left: -12px;
      }
    }

    .intro {
      padding-top: 12px;
      overflow: hidden;

      .name {
        font-size: 16px;
        font-weight: 700;
      }

      .more {
        font-size: 10px;
      }
    }
  }

  .link-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100px;

    span {
      background: linear-gradient(90deg,#fa8c1d,#fcaf3f);;
      color: #fff;
      padding: 5px 12px;
      border-radius: 3px;
      font-size: 12px;
      margin-right: 1px;
    }
  }

  .rate {
    padding-bottom: 35px;
    display: flex;

    .nice {
      flex: 1;

      .text {
        font-size: 10px;
        color: #999;
      }

      .num {
        font-weight: 700;
        font-size: 16px;
        margin: 1px 0
      }

      .desc {
        color: #999;
        font-size: 10px;
      }

    }
  }
}
</style>
