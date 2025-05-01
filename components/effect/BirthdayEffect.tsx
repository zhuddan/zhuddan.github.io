'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

function CakeMask() {
  const { width, height } = useWindowSize()
  return (
    <div className="fixed inset-0 z-10 pointer-events-none opacity-75">
      <Confetti width={width} height={height} />
    </div>
  )
}

interface BirthdayEffectProps {
  title: string
  birthday: string
}

export default function BirthdayEffect({
  title,
  birthday,
}: BirthdayEffectProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setMounted(true)
  }, [])
  return (
    <>
      { mounted && <CakeMask /> }
      <div className="flex items-center flex-col py-8 gap-y-3">
        <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
          {/* Happy Birthday to
          {' '}
          {name} */}
          {title}
        </h1>
        <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
          {birthday}
        </h1>
        <DotLottieReact
          src="/lottie/cake.lottie"
          loop
          autoplay
          className="max-w-full w-[500px]"
        />
      </div>
    </>
  )
}
