<template>
  <div class="house-comment">
    <show-detail title="热门评论" moreText="查看全37条评论">
      <template #default>
        <div class="inner">
          <div class="top">
            <div class="left">
              <div class="num">{{ commentData.overall }}</div>
              <div class="detail">
                <span class="super">{{ commentData.scoreTitle }}</span>
                <span class="count">{{ commentData.totalCount }}条评论</span>
                <van-rate :model-value="commentData.overall" allow-half color="#f99c54" readonly void-icon="star" void-color="#999" size="12" />
              </div>
            </div>
            <div class="right">
              <template v-for="item in commentData.subScores">
                <span>{{ item }}</span>
              </template>
            </div>
          </div>
          <div class="center">
            <template v-for="item in commentData.commentTagVo">
              <span class="default-tag" :style="{ color: item.color }">{{ item.text }}</span></template>
          </div>
          <div class="footer">
            <div class="user-avatar">
              <img :src="commentData.comment.userAvatars" alt="">
              <div class="push-date">
                <span class="name">{{ commentData.comment.userName }}</span>
                <div class="date"> {{ commentData.comment.checkInDate }}</div>
              </div>
              <div class="text">{{ commentData.comment.commentDetail }}</div>
            </div>
          </div>
        </div>
      </template>
    </show-detail>

  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import showDetail from "@/components/show-detail/show-detail.vue"

  const props = defineProps({
    commentData: {
      type: Object,
      default: () => ({})
    }
  })

</script>

<style scoped>
.house-comment {
  .inner {
    padding: 15px 5px;
  }

  .top {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      flex: 3;

      .num {
        font-size: 42px;
        font-weight: 700;
        margin-right: 15px;

        &::after {
          content: "";
          display: block;
          border-bottom: 5px solid #f19c32;
          border-radius: 2px;
        }

      }

      .detail {
        display: flex;
        justify-content: flex-end;
        font-size: 12px;
        flex-direction: column;
        flex-shrink: 0;

        .super {
          color: #333;
        }

        .count {
          color: #666;
        }
      }
    }

    .right {
      display: flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      flex: 2;
      font-size: 10px;

      span {
        margin-right: 5px;
        height: 12px;
        line-hegit: 12px;
        color: #666;
      }
    }
  }

  .center {
    display: flex;
    font-size: 12px;
    flex-shrink: 0;
    flex-wrap: wrap;
    margin-top: 10px;

    .default-tag {
      padding: 1px;
      margin-right: 15px;
      margin-bottom: 6px;
      background-color: #f5f5f5;
      border-radius: 3px;
    }
  }

  .footer {
    margin-top: 10px;
    background-color: #f8f9fc;
    border-radius: 2px;
    padding: 10px;

    .user-avatar {
      padding: 3px;
      padding-top: 0;

      img {
        border-radius: 50%;
        width: 28px;
        margin-right: 10px;
      }

      .push-date {
        display: inline-block;
        box-sizing: border-box;

        .date {
          color: #999;
          font-size: 11px;
        }
      }

      .name {
        font-weight: 700;
        font-size: 12px;
      }

      .text {
        font-size: 12px;
        color: #666;
        margin-top: 15px;
      }
    }
  }
}
</style>
