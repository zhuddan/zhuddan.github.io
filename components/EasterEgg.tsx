'use client'
import { useEffectDay } from '@/hooks/useEffectDay'
import { motion } from 'framer-motion'
import { Banner } from 'fumadocs-ui/components/banner'
import React, { useEffect, useState } from 'react'
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

// eslint-disable-next-line unused-imports/no-unused-vars
function AnimatedClock() {
  const [time, setTime] = useState<string>()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [mounted])

  if (!mounted)
    return null

  return (
    <div className="flex items-center justify-center">
      <motion.div
        key={time} // 每秒重新渲染动画
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ fontSize: '3rem', fontFamily: 'monospace' }}
      >
        {time}
      </motion.div>
    </div>
  )
}

export default function EasterEgg() {
  const { type, data, date, now } = useEffectDay()

  if (type === 'JUNJUN_BIRTHDAY') {
    return <Cake name="JunJun" birthday={data} />
  }
  if (type === 'ZD_BIRTHDAY') {
    return <Cake name="ZhuDan" birthday={data} />
  }
  if (type === 'ZX_BIRTHDAY') {
    return <Cake name="ZUO XUN" birthday={data} />
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
    <div className="">
      <Banner variant="rainbow" changeLayout={false} className="!h-[100px]">
        { now?.toString() ?? null}
      </Banner>
    </div>
  )
  // return <AnimatedClock />
}
