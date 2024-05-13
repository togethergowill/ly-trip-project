<template>
  <div class="show-detail">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        <h3>我是默认内容</h3>
      </slot>
    </div>
    <footer v-if="moreText.length">
      <span class="more">{{ moreText }}</span>
      <van-icon name="arrow" />
    </footer>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  const props = defineProps({
    title: {
      type: String,
      default: "默认标题"
    },
    moreText: {
      type: String,
      default: "默认更多内容"
    }
  })

</script>

<style lang="less" scoped>
.show-detail {
  padding: 0 15px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;

    .title {
      font-size: 18px;
      color: #333;
    }
  }

  .content {
    padding: 8px 0;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 44px;
    height: 44px;
    color: #f6ae7e;
    font-size: 13px;
    font-weight: 600;
  }
}
</style>
