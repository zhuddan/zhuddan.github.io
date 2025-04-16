'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import dayjs from 'dayjs'
import React from 'react'

const JUNJUN_BIRTHDAY = '04-16'// '06-19'
export default function EasterEgg() {
  const x = dayjs().format('MM-DD')
  if (JUNJUN_BIRTHDAY === x) {
    return <Cake />
  }
  return (
    <div>
      {x}
    </div>
  )
}

function Cake() {
  return (
    <DotLottieReact
      src="/Animation - 1744775417256.lottie"
      loop
      autoplay
      width={500}
    />
  )
}
