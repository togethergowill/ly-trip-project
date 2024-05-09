import lyAxios from "../request"

export function getHomeHotSuggests() {
  return lyAxios.get({
    url: 'home/hotSuggests'
  })
}

export function getHomeCategories() {
  return lyAxios.get({
    url: 'home/categories'
  })
}

export function getHomeHouseList(currentPage) {
  return lyAxios.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}