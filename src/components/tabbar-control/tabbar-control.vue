<template>
  <div class="tabbar">
    <header>
      <div v-for="(item, index) in title" >
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
          return ["item1", "item2", "item3"]
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
.tabbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 42px;
  line-height: 42px;
  z-index: 99;
  box-sizing: border-box;
  animation: showTabbar 0.5s ease-in;
}

@keyframes showTabbar {
  0% {
    display: none;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}

header {
  display: flex;
  justify-content: space-between;
  height: 100%;
  color: #100101;
  background-color: #f5f5f5;
}

header div {
  display: flex;
  justify-content: center;
  flex: 1;
}

header .item {
  padding: 0px 8px 0px;
}

.active {
  border-bottom: 3px solid var(--primary-color);
  color: var(--primary-color);
}
</style>
