<template>
  <div>
    <header>
      <div v-for="(item, index) in title">
        <span class="item" @click="getIndex(index)" :class="{ active: currentIndex === index }">{{ item }}</span>
      </div>
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
}

header div {
  flex: 1;
  text-align: center;
}

header .item {
  padding: 5px 8px 8px;
  cursor: pointer;
}

.active {
  border-bottom: 3px solid red;
}
</style>
