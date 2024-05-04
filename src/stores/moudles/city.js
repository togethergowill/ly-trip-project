import { defineStore } from "pinia";
import { getCityAll } from "@/services/moudles/city";

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async fetchCityAllData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore