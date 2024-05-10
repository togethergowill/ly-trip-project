import axios from "axios"
import { BASEURL, TIMEOUT } from "./config"
import useMainStore from "@/stores/moudles/main"

class lyAxios {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    this.instance.interceptors.request.use(config => {
      useMainStore().isLoading = true
      return config
    }, err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      useMainStore().isLoading = false
      return res
    }, err => {
      const mainStore = useMainStore()
      useMainStore().isLoading = false
      return err
    })
  }
  // 使用路由拦截改变isLoading的值

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => reject(err))
    })
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new lyAxios(BASEURL, TIMEOUT)