'use client'
import dayjs from 'dayjs'
import solarLunar from 'solarLunar'

const EFFECT_DATE = {
  JUNJUN_BIRTHDAY: '06-19',
  ZD_BIRTHDAY: '九月初五',
  NEW_YEAR: '01-01',
  SPRING_FESTIVAL: '正月初一',
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
const debugDate = '2025-01-29'
export function getEffectDay() {
  // 新历日期
  const fullDate = dayjs(
    // eslint-disable-next-line node/prefer-global/process
    process.env.NODE_ENV === 'development'
      ? debugDate
      : undefined,
  ).format('YYYY-MM-DD')
  const [year, month, day] = fullDate.split('-').map(Number)
  const solar = dayjs(fullDate).format('MM-DD')
  const { monthCn, dayCn, animal } = solarLunar.solar2lunar(year, month, day)

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
  return result
}
