<template>
  <div class="house-info">
    <h2 class="title">
      <view class="van-multi-ellipsis--l3">
        {{ topData.houseName }}
      </view>
    </h2>
    <div class="tags">
      <template v-for="(item, index) in topData.houseTags">
        <span class="item" v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment common">
      <div class="score">
        <div class="num">{{topData.commentBrief.overall}}</div>
        <div class="text">{{topData.commentBrief.scoreTitle}}</div>
        <div class="subtext">{{topData.commentBrief.commentBrief}}</div>
      </div>
      <div class="left">
        <div class="text">{{topData.commentBrief.totalCount}}条评论</div>
        <i>&gt;</i>
      </div>
    </div>
    <div class="map common">
      <div class="address">{{topData.nearByPosition.address}}</div>
      <div class="left">
        <div class="text">地图·周边</div>
        <i>&gt;</i>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  const props = defineProps({
    topData: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<style lang="less" scoped>
.house-info {
  padding: 15px 15px 40px;

  .title {
    font-size: 18px;
    height: 86px;
  }
  .tags {
    margin: 0px 10px;
    
    span {
      margin: 0 2px;
      font-size: 12px;
      padding: 1px 3px;
    }
  }

}

.common {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 10px 12px;
  background-color: #f6f6fc;
  margin-top: 15px;

  .left {
    display: flex;
    color: var(--primary-color);

    .text {
      margin-right: 5px;
    }
  }
}

.comment {
  .score {
    display: flex;
    align-items: center;

    .num {
      font-size: 16px;
      font-weight: 700;
    }

    .text {
      font-weight: 700;
      margin: 0 5px;
    }

    .subtext {
      color: #666;
    }
  }


}

.map {
  .address {
    font-size: 14px;
    font-weight: 700;
  }
}
</style>
