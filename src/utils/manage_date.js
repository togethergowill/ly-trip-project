import dayjs from "dayjs";

export function getDate(date = new Date()) {
  return dayjs(date)
}

export function getNextDate(date = new Date()) {
  const dayObj = dayjs(date)
  return dayObj.set('day', dayObj.get('day') + 1)
}

export function getIntervalDate(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}

export function getFormatDate(date, formatStr = 'MM月DD日') {
  return dayjs(date).format(formatStr)
}
