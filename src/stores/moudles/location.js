import { defineStore } from "pinia";
import axios from "axios";

const useLocationStore = defineStore('location', {
  state: () => ({
    location: '',
    cityInfo: {}
  }),
  getters: {
    city() {
      return this.cityInfo.city || this.cityInfo.province
    }
  },
  actions: {
    getLocation() {
      const success = (pos) => {
        const crd = pos.coords;
        this.location = crd.longitude.toFixed(6) + ',' + crd.latitude.toFixed(6)
        // this.location = "106.9,27.7"
        this.getLocationCity()
      }
      function error() {
        console.log("获取位置信息失败")
      }
      const option = {
        timeout: 3000
      }
      navigator.geolocation.getCurrentPosition(success, error, option);
    },
    getLocationCity() {
      axios.get("https://restapi.amap.com/v3/geocode/regeo", {
        params: {
          key: 'c7f7b9826d83ade60b72611f9c90b673',
          output: 'json',
          location: this.location
        }
      },
      ).then(res => {
        this.cityInfo = res.data.regeocode.addressComponent
      })
    }
  }
})


export default useLocationStore
