import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'

export function useScroll() {
  const isReachBottom = ref(false)

  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)


  const scrollListenerHandler = throttle(() => {
    {
      scrollTop.value = document.documentElement.scrollTop
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
      if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
        isReachBottom.value = true
      }
    }
    console.log('hhhh')
  },100)
  // 当组件从组件树中移除后，需要移除监听，因为如果不移除监听，其他页面发生滚动，也能触发scrollListenerHandler事件
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}