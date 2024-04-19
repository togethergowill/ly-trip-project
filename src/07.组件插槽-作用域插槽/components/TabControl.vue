<template>
  <div class="">
    <header>
      <template v-for="(item, index) in title" :key="item">
        <div class="item" @click="getIndex(index)" >
          <slot :title="item"><span :class="{ active: currentIndex === index }">{{ item }}</span></slot>
        </div>
      </template>
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      title: {
        type: Array,
        default() {
          return ["衣服", "裤子", "鞋子"]
        }
      }
    },
    $emit: ['subIndex'],
    methods: {
      getIndex(index) {
        this.currentIndex = index
        this.$emit('subIndex', index)
      }
    },
  }
</script>

<style scoped>
header {
  display: flex;
  height: 44px;
  line-height: 44px;
}

header div {
  flex: 1;
  text-align: center;
}

header span {
  padding: .6667vw 2.1333vw 1.0667vw;
  cursor: pointer;
}

span.active{
  border-bottom: 3px solid red;
}
</style>
