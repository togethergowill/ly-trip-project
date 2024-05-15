<template>
  <div class="notice">
    <show-detail title="预定须知">
      <template #default>
        <div class="content" v-for="item in orderRules">
          <div class="flag single_row_ellipsis">{{ item.title }}</div>
          <div class="intro single_row_ellipsis">{{ item.introduction }}</div>
        </div>
      </template>
    </show-detail>
  </div>
</template>

<script setup>
  import showDetail from "@/components/show-detail/show-detail.vue"

  const props = defineProps({
    orderRules: {
      type: Object,
      default: () => ({})
    }
  })

</script>

<style scoped>
.notice {
  .content {
    display: flex;
    font-size: 12px;
    margin: 10px 0 15px;


    .flag {
      color: #999;
      margin-right: 20px;
      width: 55px;
    }
  }
}
</style>
