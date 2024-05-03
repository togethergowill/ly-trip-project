import { defineStore } from "pinia";

const useCityStore = defineStore('city',{
  state: () => ({
    person: {
      name: 'kebo',
        age: 18
    }
  })
})

export default useCityStore