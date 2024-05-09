import { defineStore } from "pinia";
import { getHomeCategories, getHomeHotSuggests, getHomeHouseList } from "@/services";

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggets: [],
    categories: [],
    currentPage: 1,
    houseList: []
  }),
  actions: {
    async fetchHomeHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggets = res.data
    },
    async fetchHomeCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHomeHouseList() {
      const res = await getHomeHouseList(this.currentPage++)
      this.houseList.push(...res.data)
    }
  }
})
export default useHomeStore