'use client'
import { getEffectDay } from '@/utils/getEffectDay'
import React from 'react'
import { Cake } from './effect/Cake'
import NewYear from './effect/NewYear'
import SpringFestival from './effect/SpringFestival'

export default function EasterEgg() {
  const { type, data, date } = getEffectDay()
  if (type === 'JUNJUN_BIRTHDAY') {
    return <Cake name="JunJun" birthday={data} />
  }
  if (type === 'ZD_BIRTHDAY') {
    return <Cake name="ZhuDan" birthday={data} />
  }
  if (type === 'NEW_YEAR') {
    return <NewYear date={date} />
  }
  if (type === 'SPRING_FESTIVAL') {
    return <SpringFestival animal={data} />
  }
  return (
    <div>
      {date}
    </div>
  )
}
