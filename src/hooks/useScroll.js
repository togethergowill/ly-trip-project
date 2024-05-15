import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'

export function useScroll(elRef) {

  let el = window
  const isReachBottom = ref(false)

  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)


  const scrollListenerHandler = throttle(() => {
    {
      let _el = el === window ? document.documentElement : el
      scrollTop.value = _el.scrollTop
      clientHeight.value = _el.clientHeight
      scrollHeight.value = _el.scrollHeight
      if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
        isReachBottom.value = true
      }
    }
  }, 100)
  // 当组件从组件树中移除后，需要移除监听，因为如果不移除监听，其他页面发生滚动，也能触发scrollListenerHandler事件
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}