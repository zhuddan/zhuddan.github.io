'use client'
import dayjs from 'dayjs'
import solarLunar from 'solarLunar'

const EFFECT_DATE = {
  JUNJUN_BIRTHDAY: '06-19',
  ZD_BIRTHDAY: '九月初五',
  NEW_YEAR: '01-01',
  SPRING_FESTIVAL: '正月初一',
  VALENTINE_S_DAY: '02-14',
  LANTERN_FESTIVAL: '正月十五',
  INTERNATIONAL_WOMEN_S_DAY: '03-08',
  MAY_DAY: '05-01',
  YOUTH_DAY: '05-04',
  DUAN_WU: '五月初五',
  CHILDREN_S_DAY: '06-01',
  MOON_FESTIVAL: '八月十五',
  QI_XI: '七月初七',
  QING_MING: '',
  NONE: '',
} as const

type ResultType = keyof typeof EFFECT_DATE

const EFFECT_DATE_KEYS = Object.keys(EFFECT_DATE) as ResultType[]

interface Result {
  type: ResultType
  date: string
  year: number
  month: number
  day: number
  data: string
}
// const debugDate = '2025-01-01'
// const debugDate = '2025-01-29'
// const debugDate = '2025-02-12'
// const debugDate = '2025-02-14'
// const debugDate = '2025-03-08'
// const debugDate = '2025-04-04'
// const debugDate = '2025-05-01'
// const debugDate = '2025-05-04'
// const debugDate = '2025-05-31'
// const debugDate = '2025-06-01'
// const debugDate = '2025-06-19'
const debugDate = '2025-08-29'
// const debugDate = '2025-10-06'

export function getEffectDay() {
  // 新历日期
  const fullDate = dayjs(
    // // eslint-disable-next-line node/prefer-global/process
    // process.env.NODE_ENV === 'development'
    //   ? debugDate
    //   : undefined,
  ).format('YYYY-MM-DD')
  const [year, month, day] = fullDate.split('-').map(Number)
  const solar = dayjs(fullDate).format('MM-DD')
  const { monthCn, dayCn, animal, term } = solarLunar.solar2lunar(year, month, day)

  //  农历日期
  const lunar = monthCn + dayCn
  const result: Result = {
    type: 'NONE',
    date: fullDate,
    year,
    month,
    day,
    data: '',
  }

  for (let index = 0; index < EFFECT_DATE_KEYS.length; index++) {
    const key = EFFECT_DATE_KEYS[index]
    const data = EFFECT_DATE[key]
    if (data === solar || data === lunar) {
      result.type = key
      if (key === 'NEW_YEAR') {
        result.data = `${year}`
      }
      else if (key === 'SPRING_FESTIVAL') {
        result.data = `${animal}`
      }
      else {
        result.data = data
      }
      return result
    }
  }
  if (term === '清明') {
    result.type = 'QING_MING'
  }
  return result
}
