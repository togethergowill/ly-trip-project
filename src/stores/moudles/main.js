import { defineStore } from "pinia";
import useDayStore from './day'

const dayStore = useDayStore()
const useMainStore = defineStore('main',{
  state:()=>({
    
  })
})