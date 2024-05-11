import lyAxios from "../request"

export function getDetailInfos(houseId) {
  return lyAxios.get({
    url: 'detail/infos',
    params: {
      houseId,
    }
  })
}