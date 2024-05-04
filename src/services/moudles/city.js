import lyAxios from "../request";

export function getCityAll() {
  return lyAxios.get({
    url: '/city/all'
  })
}