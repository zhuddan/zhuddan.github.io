'use client'
import { FESTIVALS } from '@/constants/festivals'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import solarLunar from 'solarlunar'

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
// const debugDate = '2025-08-29'
// const debugDate = '2025-10-06'
// const debugDate = '2025-10-17'
// const debugDate = '2025-10-25'
const debugDate = undefined

export function useEffectDay() {
  const [now, setNow] = useState<Date>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setInterval(() => {
        setNow(new Date())
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [mounted])

  // 新历日期
  const fullDate = dayjs(
    //  eslint-disable-next-line node/prefer-global/process
    process.env.NODE_ENV === 'development'
      ? debugDate
      : now,
  ).format('YYYY-MM-DD')
  const [year, month, day] = fullDate.split('-').map(Number)
  const _solar = dayjs(fullDate).format('MM-DD')
  const {
    monthCn,
    dayCn,
    // animal,
    term,
  } = solarLunar.solar2lunar(year, month, day)

  //  农历日期
  const _lunar = monthCn + dayCn

  for (let index = 0; index < FESTIVALS.length; index++) {
    const result = FESTIVALS[index]
    if ('lunar' in result) {
      if (_lunar === result.lunar) {
        return result
      }
    }
    else if ('solar' in result) {
      if (_solar === result.solar) {
        return result
      }
    }
    else if ('term' in result) {
      if (term && result.term) {
        return result
      }
    }
    else {
      // 判断公历或是阳历生日
      if (result.birthday === _solar || result.birthday === _lunar) {
        return result
      }
    }
  }
  return null
}
