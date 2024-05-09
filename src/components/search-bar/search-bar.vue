<template>
  <div class="search-bar">
    <div class="wrap">
      <div class="date">
        <div class="checkin-leave">
          <span class="text">住</span>
          <span class="time">05.09</span>
        </div>
        <div class="checkin-leave leave">
          <span class="text">离</span>
          <span class="time">05.10</span>
          <i class="icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'

</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding: 16px 16px 10px;
  background-color: #fff;

  .wrap {
    display: flex;
    height: 45px;
    border-radius: 6px;
    background: #f2f4f6;

    .date {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #fff;
      color: #999;
      padding-left: 10px;
      font-size: 10px;

      .checkin-leave {
        margin-bottom: 2px;
        padding-right: 6px;

        .text {
          color: #999;
        }

        .time {
          font-family: PingFangSC-Medium;
          margin: 0 2px;
          font-weight: 500;
          color: #333;
        }

      }

      .leave {
        position: relative;
        .icon {
          position: absolute;
          display: inline-block;
          width: 5px;
          height: 5px;
          right: 0;
          bottom: 3px;
          // background-color: red;
          background: url("@/assets/img/home/home-sprite.png") -201px -157px / 207px 192px;
        }
      }
    }
  }
}
</style>
