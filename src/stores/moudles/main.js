import { defineStore } from "pinia";
import { getDate, getNextDate } from "@/utils/manage_date"
const checkinDate = getDate()
const leaveDate = getNextDate()

const useMainStore = defineStore('main', {
  state: () => ({
    checkinDate,
    leaveDate,
    
  })
})

export default useMainStore