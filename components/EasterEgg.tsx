'use client'
import { useEffectDay } from '@/hooks/useEffectDay'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import BirthdayEffect from './effect/BirthdayEffect'
import ImageEffect from './effect/ImageEffect'

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
/**
 * 彩蛋
 */
export default function EasterEgg() {
  const f = useEffectDay()
  if (!f)
    return null
  if (f?.img) {
    return <ImageEffect {...f.img} title={f.title} footer={f.footer} />
  }
  if ('birthday' in f) {
    return <BirthdayEffect title={f.title} birthday={f.birthday} />
  }
  return <AnimatedClock />
}
