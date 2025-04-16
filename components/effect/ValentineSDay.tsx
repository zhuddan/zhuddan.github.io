import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

export default function ValentineSDay() {
  return (
    <div className="flex items-center flex-col py-8 gap-y-3">
      <h1 className="text-xl font-bold text-center sm:text-3xl md:text-4xl">
        情人节快乐
      </h1>
      <DotLottieReact
        src="/lottie/Valentine's Day.lottie"
        loop
        autoplay
        className="max-w-full w-[500px]"
      />
    </div>
  )
}
