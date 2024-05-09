import { defineStore } from "pinia";
import dayjs from "dayjs";
import { getTomorrow, getIntervalDay, getDate } from "@/utils/manage_date";

const useDayStore = defineStore('day', {
  state: () => ({

  }),
  getters: {
    intervalDay() {
      return (startDate = getDate(), endDate = getTomorrow()) => getIntervalDay(startDate, endDate)
    },
    getDay() {
      return (date, formatStr = 'M月D日') => getDate(date).format(formatStr)
    },
    nextDay() {
      return (date, formatStr = 'M月D日') => getTomorrow(date).format(formatStr)
    }

  }
})

export default useDayStore