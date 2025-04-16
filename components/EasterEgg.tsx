'use client'
import { getEffectDay } from '@/utils/getEffectDay'
import React from 'react'
import { Cake } from './effect/Cake'
import ChildrenSDay from './effect/ChildrenSDay'
import DuanWu from './effect/DuanWu'
import InternationalWomenSDay from './effect/InternationalWomenSDay'
import LanternFestival from './effect/LanternFestival'
import MayDay from './effect/MayDay'
import MoonFestival from './effect/MoonFestival'
import NewYear from './effect/NewYear'
import QingMing from './effect/QingMing'
import QiXi from './effect/QiXi'
import SpringFestival from './effect/SpringFestival'
import ValentineSDay from './effect/ValentineSDay'
import YouthDay from './effect/YouthDay'

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
  if (type === 'LANTERN_FESTIVAL') {
    return <LanternFestival />
  }
  if (type === 'VALENTINE_S_DAY') {
    return <ValentineSDay />
  }
  if (type === 'INTERNATIONAL_WOMEN_S_DAY') {
    return <InternationalWomenSDay />
  }
  if (type === 'QING_MING') {
    return <QingMing />
  }
  if (type === 'MAY_DAY') {
    return <MayDay />
  }
  if (type === 'YOUTH_DAY') {
    return <YouthDay />
  }
  if (type === 'DUAN_WU') {
    return <DuanWu />
  }
  if (type === 'CHILDREN_S_DAY') {
    return <ChildrenSDay />
  }
  if (type === 'QI_XI') {
    return <QiXi />
  }
  if (type === 'MOON_FESTIVAL') {
    return <MoonFestival />
  }

  return (
    <div>
      {date}
    </div>
  )
}
