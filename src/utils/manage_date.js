import dayjs from "dayjs";

export function getDate(date = new Date()) {
  return dayjs(date)
}

export function getTomorrow(date = new Date()) {
  const dayObj = dayjs(date)
  return dayObj.set('day', dayObj.get('day') + 1)
}

export function getIntervalDay(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}

