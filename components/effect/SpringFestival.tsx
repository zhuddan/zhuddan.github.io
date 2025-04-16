'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

export default function SpringFestival({ animal }: { animal: string }) {
  return (
    <div className="flex items-center flex-col py-8 gap-y-8 relative">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        {animal}
        年春节快乐
      </h1>
      <DotLottieReact
        src="/lottie/SpringFestival.lottie"
        loop
        autoplay
        className="max-w-full w-[500px]"
      />
    </div>
  )
}
